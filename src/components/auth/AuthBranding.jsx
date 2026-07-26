import React from 'react';
import { Zap, Package, Users, Star } from 'lucide-react';

export default function AuthBranding() {
  return (
    <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
      {/* Top Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer group w-fit">
        <div className="w-10 h-10 rounded-xl bg-[#ff5722] flex items-center justify-center text-white font-black shadow-[0_0_25px_rgba(255,87,34,0.4)] group-hover:scale-105 transition-all">
          <Zap className="w-6 h-6 fill-white" />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-white">
          Zeno<span className="text-[#ff5722]">Mart</span>
        </span>
      </div>

      {/* Main Typography & Tagline */}
      <div className="my-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] text-xs font-mono font-bold uppercase tracking-widest">
          WELCOME TO ZENOMART
        </div>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
          Shop the future. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff5722] via-[#ff784e] to-[#ff5722]">
            Today.
          </span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
          Thousands of futuristic products, lightning-fast delivery, and prices that make your wallet happy.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-[#ff5722] font-black text-xl md:text-2xl">
            <Package className="w-5 h-5 hidden sm:inline" /> 20K+
          </div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Products</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-white font-black text-xl md:text-2xl">
            <Users className="w-5 h-5 hidden sm:inline text-[#ff5722]" /> 50K+
          </div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Active Users</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-1 text-[#ff5722] font-black text-xl md:text-2xl">
            4.9 <Star className="w-4 h-4 fill-[#ff5722]" />
          </div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Rating</div>
        </div>
      </div>
    </div>
  );
}