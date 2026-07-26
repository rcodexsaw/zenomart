import React from 'react';
import { useNavigate } from 'react-router'; 
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import { ArrowRight, Zap, ShieldCheck, Tag } from 'lucide-react';

export default function Home({ onAddToCart }) {
  const navigate = useNavigate();

  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-12">
      <HeroBanner onShopClick={() => navigate('/shop')} />

      {/* Categories */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight">Shop by Category</h2>
          <button onClick={() => navigate('/shop')} className="text-sm font-semibold text-[#ff5722] hover:underline flex items-center gap-1 cursor-pointer">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate('/shop')}
              className="group p-5 rounded-2xl bg-[#11131a] border border-white/5 hover:border-[#ff5722]/20 hover:bg-[#161922] transition-all cursor-pointer flex flex-col items-center text-center space-y-2"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform">{cat.icon}</span>
              <div className="font-bold text-sm text-slate-200 group-hover:text-[#ff5722] transition-colors">
                {cat.name}
              </div>
              <div className="text-xs text-slate-500">{cat.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Top Rated Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Perks Banner */}
      <section className="grid md:grid-cols-3 gap-4 pt-4">
        {[
          { icon: Zap, title: 'Ultra-fast Delivery', desc: 'Same-day delivery on select products' },
          { icon: ShieldCheck, title: 'Secure Checkout', desc: '100% encrypted & safe payment flow' },
          { icon: Tag, title: 'Best Prices', desc: 'Price-match guarantee across stores' },
        ].map((perk, idx) => {
          const Icon = perk.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-[#11131a] border border-white/5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#ff5722]/10 text-[#ff5722]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{perk.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{perk.desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}