import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router';
import CheckoutModal from './CheckoutModal'; 

export default function CartDrawer({ isOpen, onClose, cart, setCart }) {
  const navigate = useNavigate();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // 👈 State

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleProductClick = (productId) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
      >
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="w-full max-w-md bg-[#0a0c10] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl shadow-[#ff5722]/10 relative overflow-hidden cursor-default"
        >
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Cart Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#ff5722]" />
                Your Cart 
                <span className="text-xs font-semibold bg-[#ff5722]/15 text-[#ff5722] border border-[#ff5722]/20 px-2.5 py-0.5 rounded-full">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </h2>
              <button 
                onClick={onClose} 
                className="p-2 rounded-xl bg-white/5 text-slate-400 hover:bg-[#ff5722]/20 hover:text-[#ff5722] transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="mt-6 space-y-3.5 max-h-[58vh] overflow-y-auto pr-1 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="text-slate-400 font-medium">Your bag is empty.</p>
                  <p className="text-xs text-slate-600">Looks like you haven't added anything yet.</p>
                </div>
              ) : (
                cart.map((item) => {
                  const itemImage = Array.isArray(item.images) && item.images.length > 0 
                    ? item.images[0] 
                    : (item.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500');

                  return (
                    <div 
                      key={item.id} 
                      onClick={() => handleProductClick(item.id)}
                      className="group flex items-center justify-between bg-white/3 hover:bg-white/6 border border-white/10 hover:border-[#ff5722]/40 p-3.5 rounded-2xl transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <img 
                          src={itemImage} 
                          alt={item.name} 
                          className="w-14 h-14 rounded-xl object-cover border border-white/10 group-hover:border-[#ff5722]/30 transition-colors bg-slate-900" 
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-100 line-clamp-1 group-hover:text-[#ff5722] transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-[#ff5722]">
                              ${item.price}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">
                              × {item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(item.id);
                        }} 
                        className="text-slate-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-all cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Footer / Checkout Button */}
          <div className="border-t border-white/10 pt-5 space-y-4 relative z-10 bg-[#0a0c10]">
            <div className="flex justify-between items-baseline">
              <span className="text-slate-400 font-medium text-sm">Subtotal:</span>
              <span className="text-[#ff5722] text-2xl font-black tracking-tight drop-shadow-[0_0_12px_rgba(255,87,34,0.3)]">
                ${total.toFixed(2)}
              </span>
            </div>

            <button 
              disabled={cart.length === 0}
              onClick={() => setIsCheckoutOpen(true)} // 👈 Open Checkout Modal
              className="w-full bg-[#ff5722] hover:bg-[#e64a19] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#ff5722]/25 hover:shadow-[#ff5722]/40 active:scale-[0.99] cursor-pointer"
            >
              Checkout Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Checkout Modal Popup */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => {
          setIsCheckoutOpen(false);
          onClose(); // Close CartDrawer when Checkout finishes
        }} 
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}