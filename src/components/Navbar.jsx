import React from "react";
import { Zap, ShoppingBag, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router"; // 👈 Router Hooks
import { useAuth } from "../context/AuthContext";

export default function Navbar({ cartCount, setIsCartOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  // Logout Handler Function
  const handleLogout = () => {
    logout();             // 1. AuthContext se session end karega
    navigate("/login");   // 2. Direct Login page par bhej dega 🚀
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
  ];

  const displayName = user?.name ? user.name : "Guest";
  const avatarInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0b0e]/85 border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Click -> Go Home */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#ff5722] flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(255,87,34,0.4)] group-hover:scale-105 transition-all duration-200">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Zeno<span className="text-[#ff5722]">Mart</span>
            </span>
          </div>
        </div>

        {/* Dynamic Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#ff5722] text-white shadow-[0_0_18px_rgba(255,87,34,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <div className="w-7 h-7 rounded-full bg-[#ff5722] text-white font-bold flex items-center justify-center text-xs shadow-sm shadow-[#ff5722]/40">
              {avatarInitial}
            </div>
            <span className="text-xs font-semibold text-slate-200 capitalize">
              {displayName}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#ff5722] text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md shadow-[#ff5722]/50 animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Updated Logout Button */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400 text-slate-400 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}