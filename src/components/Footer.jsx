import React, { useState } from 'react';
import { ShoppingBag, Code2, ArrowUpRight, Check, ArrowUp } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0c10] text-slate-400 mt-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#ff5722]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="font-black text-2xl text-white tracking-tight inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ff5722] flex items-center justify-center text-white shadow-lg shadow-[#ff5722]/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              Zeno<span className="text-[#ff5722]">Mart</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ultra-fast. Next-gen shopping experience built for speed and comfort.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 text-slate-400">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#ff5722]/20 hover:text-[#ff5722] transition-all cursor-pointer"
                title="Follow on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#ff5722]/20 hover:text-[#ff5722] transition-all cursor-pointer"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 rounded-md" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-[#ff5722]/20 hover:text-[#ff5722] transition-all cursor-pointer"
                title="View Code"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Shop</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/shop" className="hover:text-[#ff5722] transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=electronics" className="hover:text-[#ff5722] transition-colors">Electronics</Link></li>
              <li><Link to="/shop?sort=trending" className="hover:text-[#ff5722] transition-colors">Trending Now</Link></li>
              <li><Link to="/shop?sort=new" className="hover:text-[#ff5722] transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => alert('Order tracking feature coming soon!')} className="hover:text-[#ff5722] transition-colors text-left cursor-pointer">Order Tracking</button></li>
              <li><button onClick={() => alert('Free 3-day express shipping on all orders!')} className="hover:text-[#ff5722] transition-colors text-left cursor-pointer">Shipping Policy</button></li>
              <li><button onClick={() => alert('30-day hassle-free returns!')} className="hover:text-[#ff5722] transition-colors text-left cursor-pointer">Returns & Refunds</button></li>
              <li><button onClick={() => alert('Contact us at support@zenomart.com')} className="hover:text-[#ff5722] transition-colors text-left cursor-pointer">Help Center</button></li>
            </ul>
          </div>

          {/* Newsletter / Interactive Subscription */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Stay Updated</h4>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-[#ff5722]/50 transition-all">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email..." 
                  className="bg-transparent text-xs text-white px-2 focus:outline-none w-full"
                  required
                />
                <button 
                  type="submit" 
                  disabled={loading || subscribed}
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white p-2 rounded-lg transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {subscribed ? <Check className="w-4 h-4 text-white" /> : <ArrowUpRight className="w-4 h-4" />}
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-medium animate-fade-in">
                  ✓ Thanks for subscribing!
                </p>
              )}
            </form>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ZenoMart — Ultra-fast. Next-gen shopping.</p>
          
          <div className="flex items-center gap-6">
            <button onClick={() => alert('Privacy Policy: We protect your data.')} className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => alert('Terms of Service: Standard e-commerce terms apply.')} className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</button>
            
            {/* Scroll To Top Button */}
            <button 
              onClick={scrollToTop} 
              className="p-2 rounded-lg bg-white/5 hover:bg-[#ff5722] hover:text-white transition-all cursor-pointer text-slate-400"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}