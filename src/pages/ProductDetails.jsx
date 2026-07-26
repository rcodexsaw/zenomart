import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { PRODUCTS } from "../data/mockData";
import { ShoppingBag, Star, ArrowLeft, ShieldCheck, Zap, Truck, Check } from "lucide-react";

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // URL id se matching product dhoondhega (String/Number handle karta hai)
  const product = PRODUCTS.find((p) => String(p.id) === String(id));

  // Product ki multiple images, ya fir fallback image
  const productImages = product?.images && product.images.length > 0
    ? product.images
    : [product?.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-white">Product Not Found</h2>
        <p className="text-slate-400 text-sm">Jis product ko aap dhoondh rahe hain wo exist nahi karta.</p>
        <button
          onClick={() => navigate("/shop")}
          className="text-[#ff5722] hover:underline text-sm font-semibold cursor-pointer"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    // Selected quantity ke hisaab se cart me items add karega
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </button>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Side: Photo Gallery */}
        <div className="space-y-4">
          {/* Main Hero Photo */}
          <div className="relative aspect-4/3 rounded-3xl bg-[#11131a] border border-white/10 overflow-hidden group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-4 left-4 bg-[#11131a]/60 backdrop-blur-md text-[#ff5722] text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
              {product.category}
            </span>
          </div>

          {/* Thumbnails (Realistic Photos Gallery) */}
          <div className="grid grid-cols-4 gap-3">
            {productImages.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImage === imgUrl
                    ? "border-[#ff5722] scale-95 shadow-[0_0_15px_rgba(255,87,34,0.3)]"
                    : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 bg-[#ff5722]/10 text-[#ff5722] px-2.5 py-1 rounded-lg text-xs font-bold border border-[#ff5722]/20">
                <Star className="w-3.5 h-3.5 fill-[#ff5722]" />
                {product.rating || 4.8}
              </div>
              <span className="text-slate-500 text-xs">
                • {product.reviews || 120} Verified Customer Reviews
              </span>
            </div>
          </div>

          <div className="text-3xl font-extrabold text-[#ff5722]">
            ${product.price}
          </div>

          <p className="text-slate-300 text-sm leading-relaxed border-t border-b border-white/10 py-4">
            {product.description || "High quality premium product built for daily usage with durable materials and sleek modern aesthetics."}
          </p>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center bg-[#11131a] border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-lg font-bold cursor-pointer transition-colors"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-bold text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 rounded-lg text-lg font-bold cursor-pointer transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 ${
                added
                  ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-[#ff5722] hover:bg-[#e64a19] text-white shadow-[0_0_20px_rgba(255,87,34,0.3)]"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add To Cart
                </>
              )}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#ff5722]" /> Free Delivery
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff5722]" /> 1 Year Warranty
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#ff5722]" /> Instant Dispatch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}