import React, { useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < Math.floor(rating) ? "text-neon-blue fill-neon-blue" : "text-gray-600"} 
      />
    ));
  };

  const getStockStatusClass = (status: string) => {
    switch(status) {
      case 'In Stock':
        return 'text-neon-green';
      case 'Low Stock':
        return 'text-yellow-500';
      case 'Out of Stock':
        return 'text-red-500';
      default:
        return 'text-neon-green';
    }
  };

  return (
    <div 
      className="gamer-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.onSale && (
            <span className="bg-black/70 border border-neon-blue text-neon-blue text-xs font-bold px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-black/70 border border-neon-purple text-neon-purple text-xs font-bold px-2 py-1 rounded">
              BEST SELLER
            </span>
          )}
          {product.newArrival && (
            <span className="bg-black/70 border border-neon-green text-neon-green text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Quick View Button */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-gamer-dark text-neon-blue border border-neon-blue rounded-full p-2 flex items-center hover:bg-neon-blue/10 transition-colors">
              <Eye size={18} />
              <span className="ml-1">Quick View</span>
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-400 mb-1">{product.brand}</div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-white">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          {renderStars(product.rating)}
          <span className="text-gray-400 text-sm ml-1">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-neon-blue font-bold text-lg mr-2">${product.salePrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-lg text-white">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <span className={`text-sm ${getStockStatusClass(product.stockStatus)}`}>
            {product.stockStatus}
          </span>
        </div>

        {/* Sale Countdown Timer */}
        {product.onSale && product.saleEndsIn && (
          <div className="bg-gamer-gray p-2 rounded mb-3 text-center border border-gamer-light">
            <div className="text-xs text-gray-400 mb-1">Sale ends in:</div>
            <div className="text-sm font-mono text-neon-blue">{product.saleEndsIn}</div>
          </div>
        )}
        
        <button 
          onClick={addToCart}
          disabled={product.stockStatus === 'Out of Stock'}
          className={`w-full py-2 px-4 rounded flex items-center justify-center transition-all duration-300 ${
            product.stockStatus === 'Out of Stock' 
              ? 'bg-gamer-gray cursor-not-allowed text-gray-500' 
              : 'bg-gamer-gray border border-neon-blue text-neon-blue hover:bg-neon-blue/10'
          }`}
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;