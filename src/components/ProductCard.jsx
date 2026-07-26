// src/components/ProductCard.jsx
import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router'; 

export default function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  // Pehli image pick karenge (Array ya string dono handle ho jayenge)
  const displayImage = Array.isArray(product.images) && product.images.length > 0
    ? product.images[0]
    : (product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500');

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-[#11131a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff5722]/50 transition-all duration-300 flex flex-col hover:shadow-[0_0_30px_rgba(255,87,34,0.15)] cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-[#11131A]/40 backdrop-blur-md border border-white/10 text-[#ff4209] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1 text-[#ff5722]/10 text-xs mb-1.5">
            <Star className="w-3.5 h-3.5 fill-[#ff5722]" />
            <span className="font-bold text-slate-200">{product.rating}</span>
            <span className="text-slate-500">({product.reviews})</span>
          </div>
          <h3 className="font-semibold text-slate-200 line-clamp-1 group-hover:text-[#ff5722] transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium">Price</span>
            <span className="text-xl font-black text-white tracking-tight">${product.price}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // 👈 Page navigate hone se rokta hai jab add-to-cart click ho
              onAddToCart(product);
            }}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(255,87,34,0.3)] hover:shadow-[0_0_20px_rgba(255,87,34,0.5)] cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}