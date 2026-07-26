import React from 'react';
import { Zap, ShieldCheck, Rocket, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e64a19]/10 text-[#ff5722] text-xs font-bold uppercase">
          About ZenoMart
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">
          Ultra-fast. Next-gen shopping.
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          ZenoMart was built to replace slow, bloated e-commerce platforms with a lightning-fast, visually stunning shopping experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { icon: Rocket, title: 'Speed First', desc: 'Optimized frontend architecture for zero lag.' },
          { icon: ShieldCheck, title: 'Verified Quality', desc: 'Hand-curated items guaranteed to perform.' },
          { icon: Zap, title: 'Instant Order Flow', desc: 'One-click additions and seamless checkout.' },
          { icon: Award, title: 'Top Ratings', desc: 'Trusted by over 50k happy shoppers.' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-[#11131a] border border-white/10 space-y-3">
              <Icon className="w-8 h-8 text-[#ff5722]" />
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}