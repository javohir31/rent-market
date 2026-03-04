import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface CartItem {
  id: number;
  title: string;
  img: string;
  currentPrice: string;
  originalPrice: string;
  rentalText: string;
  // track whether customer chose weekly or monthly rental on detail page
  rentalPeriod?: 'week' | 'month';
  iconImgOne: string;
  iconImgTwo: string;
  iconImgThree: string;
  iconLabels: string[];
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  /**
   * Add an item to cart; quantity defaults to 1.  
   * If the same product id + rentalPeriod already exists it increments quantity.
   */
  addToCart: (
    product: Omit<CartItem, 'quantity'> & { rentalPeriod?: 'week' | 'month' },
    quantity?: number
  ) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  selectAll: boolean;
  toggleSelectAll: () => void;
  selectedItems: number[];
  toggleItemSelection: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from local storage", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    product: Omit<CartItem, 'quantity'> & { rentalPeriod?: 'week' | 'month' },
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      // consider both id and rentalPeriod when finding duplicates
      const existingItem = prev.find(
        (item) =>
          item.id === product.id && item.rentalPeriod === product.rentalPeriod
      );
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.rentalPeriod === product.rentalPeriod
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    setSelectedItems((prev) => prev.filter((id) => id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.currentPrice.replace(/\s/g, '').replace('сум.', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    setSelectedItems([]);
    setSelectAll(false);
  };

  const isInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
      setSelectAll(false);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
      setSelectAll(true);
    }
  };

  const toggleItemSelection = (productId: number) => {
    setSelectedItems((prev) => {
      const newSelected = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      // Update selectAll state
      setSelectAll(newSelected.length === cartItems.length && cartItems.length > 0);

      return newSelected;
    });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      getTotalPrice,
      getTotalItems,
      clearCart,
      isInCart,
      selectAll,
      toggleSelectAll,
      selectedItems,
      toggleItemSelection
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};