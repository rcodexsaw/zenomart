import React, { useState } from "react";
import { PRODUCTS } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import { Search, Sparkles, Filter, PackageX } from "lucide-react";

export default function Shop({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamic categories extraction
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/20 text-[#ff5722] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Catalogue
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">All Products</h1>
          <p className="text-slate-400 text-sm">
            Explore our entire catalogue of next-gen gear ({filteredProducts.length} items).
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#11131a] border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] text-slate-200 placeholder:text-slate-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-500 mr-1 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#ff5722] text-white shadow-md shadow-[#ff5722]/30"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid / Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#11131a]/50 border border-white/5 rounded-3xl space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722]">
            <PackageX className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-white">No products found</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto">
            We couldn't find anything matching "{searchTerm}". Try checking for spelling errors or clear filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-2 text-xs font-bold text-[#ff5722] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}