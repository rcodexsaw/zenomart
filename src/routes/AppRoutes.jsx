// src/routes/AppRoutes.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

// Pages
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';
import AuthPage from '../pages/AuthPage'; 

// Route Guards
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <Routes>
      {/* 🔴 1. PUBLIC ROUTES (Sirf Non-Logged-In User Ke Liye / Login Page) */}
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<AuthPage />} />
      </Route>

      {/* 🟢 2. PROTECTED ROUTES (Shopping App - Sirf Logged-In User Ke Liye) */}
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-[#0a0b0e] text-slate-100 font-sans selection:bg-[#ff5722] selection:text-white flex flex-col justify-between">
              {/* Top Navbar */}
              <Navbar
                cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
                setIsCartOpen={setIsCartOpen}
              />

              {/* Pages Container */}
              <main className="max-w-7xl mx-auto px-6 py-8 w-full grow">
                <Routes>
                  <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                  <Route path="/app" element={<Home onAddToCart={handleAddToCart} />} />
                  <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
                </Routes>
              </main>

              {/* Cart Drawer & Footer */}
              <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                setCart={setCart}
              />

              <Footer />
            </div>
          }
        />
      </Route>

      {/* 🔄 Fallback Redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}