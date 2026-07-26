import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, CreditCard, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cart, setCart }) {
  const [step, setStep] = useState('form'); // 'form' | 'processing' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: 'card'
  });

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('processing');

    // 2 Seconds ka realistic processing delay
    setTimeout(() => {
      setStep('success');
      setCart([]); // Cart clear kar do
    }, 2000);
  };

  const handleCloseAll = () => {
    setStep('form');
    onClose();
  };

  return (
    <div 
      onClick={handleCloseAll}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#0a0c10] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl shadow-[#ff5722]/20"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={handleCloseAll}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: FORM INPUTS */}
        {step === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">Checkout</h2>
              <p className="text-slate-400 text-xs mt-1">Complete your order details below</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">City</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Shipping Address</label>
                <input 
                  required
                  type="text" 
                  placeholder="Street name, Flat No."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff5722] transition-colors"
                />
              </div>

              {/* Payment Select */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {['card', 'upi', 'cod'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: method})}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase transition-all cursor-pointer ${
                        formData.paymentMethod === method
                          ? 'border-[#ff5722] bg-[#ff5722]/15 text-[#ff5722]'
                          : 'border-white/10 text-slate-400 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total & Pay Button */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Total Amount</span>
                <span className="text-2xl font-black text-[#ff5722]">${total.toFixed(2)}</span>
              </div>

              <button 
                type="submit"
                className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-[#ff5722]/30 active:scale-98 cursor-pointer transition-all"
              >
                Pay Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PROCESSING ANIMATION */}
        {step === 'processing' && (
          <div className="py-16 text-center space-y-4">
            <Loader2 className="w-12 h-12 text-[#ff5722] animate-spin mx-auto" />
            <h3 className="text-xl font-bold text-white">Processing Payment...</h3>
            <p className="text-xs text-slate-400">Please do not close or refresh this window.</p>
          </div>
        )}

        {/* STEP 3: SUCCESS SCREEN */}
        {step === 'success' && (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Order Confirmed! 🎉</h3>
              <p className="text-xs text-slate-400 mt-1">
                Thank you, <span className="text-slate-200 font-semibold">{formData.name}</span>! Your order has been placed successfully.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-mono text-white">#ORD-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivering to:</span>
                <span className="text-white font-medium">{formData.city}</span>
              </div>
            </div>

            <button
              onClick={handleCloseAll}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3 rounded-xl transition-all cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}