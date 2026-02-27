import { Heart } from "lucide-react"
import { useFavorites } from "../../FavoritesContext"
import { useCart } from "../../CartContext"
import { useNavigate } from "react-router-dom"

interface ProductCardProps {
  id: number
  title: string
  img: string
  currentPrice: string
  originalPrice: string
  rentalText: string
  iconImgOne: string
  iconImgTwo: string
  iconImgThree: string
  iconLabels: string[]
}

const ProductCard = (props: ProductCardProps) => {
  const { id, title, img, currentPrice, originalPrice, rentalText, iconLabels, iconImgOne, iconImgTwo, iconImgThree } = props

  // build feature items array pairing images with labels
  const featureItems = [
    { img: iconImgOne, label: iconLabels[0] },
    { img: iconImgTwo, label: iconLabels[1] },
    { img: iconImgThree, label: iconLabels[2] },
  ]
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const { addToCart, isInCart } = useCart()
  const navigate = useNavigate()

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites({
        id,
        title,
        img,
        currentPrice,
        originalPrice,
        rentalText,
        iconImgOne,
        iconImgTwo,
        iconImgThree,
        iconLabels
      })
    }
  }

  const handleAddToCart = () => {
    if (isInCart(id)) {
      // If already in cart, navigate to cart page
      navigate('/cart')
    } else {
      // If not in cart, add to cart
      addToCart({
        id,
        title,
        img,
        currentPrice,
        originalPrice,
        rentalText,
        iconImgOne,
        iconImgTwo,
        iconImgThree,
        iconLabels
      })
    }
  }

  return (
    <div className="bg-white rounded-3xl w-full p-6 shadow-sm group transition-all duration-300 hover:shadow-md">
      {/* Header: title and favorite */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[1.25rem] text-[#1F1F1F] truncate">{title}</h3>
        <button 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleFavorite()
          }} 
          className="active:scale-125 transition-transform outline-none"
        >
          <Heart 
            size={24} 
            className={isFavorite(id) ? "fill-red-500 text-red-500" : "text-gray-400"} 
          />
        </button>
      </div>

      {/* Image section */}
      <div className="h-[200px] flex items-center justify-center overflow-hidden rounded-2xl mb-6">
        <img 
          src={img} 
          alt={title} 
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      {/* Narxlar qismi */}
      <div className="flex justify-between items-end mb-6">
        <div className="flex flex-col">
          <span className="text-[1.35rem] font-extrabold text-[#1F1F1F] leading-none">{currentPrice}</span>
          <span className="text-[0.85rem] text-[#9C9C9C] mt-1">{rentalText}</span>
        </div>
        <div className="flex flex-col items-end border-l pl-4 border-gray-100">
          <span className="text-[1rem] font-bold text-[#1F1F1F] leading-none line-through">{originalPrice}</span>
          <span className="text-[0.85rem] text-[#9C9C9C] mt-1">Залог 1 мес.</span>
        </div>
      </div>

      {/* Ikonkalar (features) */}
      <div className="grid grid-cols-3 gap-2 bg-[#F8F8F8] rounded-[20px] p-3 mb-6">
        {featureItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
              <img src={item.img} alt={item.label} className="w-1000 h-1000 object-contain" />
            </div>
            <span className="text-[0.65rem] leading-tight text-[#666] font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tugma */}
      <button
        onClick={handleAddToCart}
        className={`w-full text-white py-4 rounded-2xl font-bold text-[1.1rem] uppercase tracking-wider transition-all duration-300 active:scale-[0.98] ${
          isInCart(id)
            ? 'bg-[#22C55E] hover:bg-[#16A34A]' // Green background when in cart
            : 'bg-[#1F1F1F] hover:bg-[#22C55E]' // Black background when not in cart
        }`}
      >
        {isInCart(id) ? 'В корзине' : 'Арендовать'}
      </button>
    </div>
  )
}

export default ProductCard