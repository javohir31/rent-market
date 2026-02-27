import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites, Product } from '../context/FavoritesContext';
import { cn } from '@/lib/utils'; // Assuming you have this utility from Shadcn setup

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFav = isFavorite(product.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className={cn("group relative border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all", className)}>
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={cn(
            "w-5 h-5 transition-colors",
            isFav ? "fill-red-500 stroke-red-500" : "stroke-gray-600 hover:stroke-gray-900"
          )}
        />
      </button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="mt-1 text-lg font-bold text-gray-900">${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};