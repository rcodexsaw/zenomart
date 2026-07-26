import React from 'react';
import { Outlet } from 'react-router';

export default function AuthLayouts() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-slate-100 flex items-center justify-center relative overflow-hidden font-sans selection:bg-[#ff5722] selection:text-white">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#ff5722]/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Child Route Content (AuthPage) */}
      <div className="w-full relative z-10">
        <Outlet />
      </div>
    </div>
  );
}