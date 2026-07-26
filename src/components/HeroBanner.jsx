import React from 'react';
import { Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // 👈 AuthContext import kiya

export default function HeroBanner({ onShopClick }) {
  const { user } = useAuth(); // 👈 Logged in user details get kiye

  // Registered user ka naam extract karne ka logic
  const displayName = user?.name ? user.name : 'Shopper';

  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#13151d] via-[#0e1017] to-[#0a0b0e] border border-white/10 p-8 md:p-12 shadow-2xl shadow-[#ff5722]/5">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5722]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff5722]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff5722] text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,87,34,0.2)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Next-Gen Shopping Experience
          </div>

          {/* Dynamic Heading with Logged-in User Name */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Welcome back, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5722] via-[#ff7043] to-[#ffab91] drop-shadow-[0_0_20px_rgba(255,87,34,0.3)] capitalize">
              {displayName}!
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            Ultra-fast delivery, curated premium products, and lightning-smooth checkout designed for you.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={onShopClick}
              className="flex items-center gap-2.5 bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 shadow-[0_0_25px_rgba(255,87,34,0.4)] active:scale-95 cursor-pointer"
            >
              Explore Shop <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-md hover:border-[#ff5722]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black text-[#ff5722] group-hover:scale-105 transition-transform">20+</div>
              <Zap className="w-5 h-5 text-[#ff5722]/60" />
            </div>
            <div className="text-sm font-medium text-slate-400 mt-1">Products Available</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-md hover:border-[#ff5722]/40 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black text-white group-hover:text-[#ff5722] transition-colors">Free Express</div>
              <ShieldCheck className="w-5 h-5 text-slate-500" />
            </div>
            <div className="text-sm font-medium text-slate-400 mt-1">Delivery on ₹999+ orders</div>
          </div>
        </div>
      </div>
    </div>
  );
}