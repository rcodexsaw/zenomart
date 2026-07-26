// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import About from './pages/About';
// import CartDrawer from './components/CartDrawer';
// import Footer from './components/Footer';

// export default function App() {
//   const [activePage, setActivePage] = useState('Home');
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleAddToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//     setIsCartOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0b0e] text-slate-100 font-sans selection:bg-[#ccff00] selection:text-black">
//       <Navbar
//         activePage={activePage}
//         setActivePage={setActivePage}
//         cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
//         setIsCartOpen={setIsCartOpen}
//       />

//       <main className="max-w-7xl mx-auto px-6 py-8">
//         {activePage === 'Home' && <Home onAddToCart={handleAddToCart} setActivePage={setActivePage} />}
//         {activePage === 'Shop' && <Shop onAddToCart={handleAddToCart} />}
//         {activePage === 'About' && <About />}
//       </main>

//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         setCart={setCart}
//       />

//       <Footer />
//     </div>
//   );
// }



import React from 'react';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}