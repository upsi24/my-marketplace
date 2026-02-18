import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Sell from './Sell';
import ItemDetail from './ItemDetail';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';

// --- HOME PAGE COMPONENT ---
function Home() {
  const navigate = useNavigate();
  // Dummy Data
  const items = [
    { id: 1, title: "iPhone 15 Pro", price: 4200, location: "KL", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Gaming PC RTX 4090", price: 8500, location: "Selangor", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Honda Civic 2020", price: 95000, location: "Penang", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: "Herman Miller Chair", price: 3500, location: "Johor", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar /> {/* Criterion 1: Header */}
      <CategoryGrid /> {/* Criterion 2: Categories */}

      {/* HERO BANNER */}
      <div className="bg-blue-600 text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Find almost anything in Malaysia</h1>
        <p className="text-blue-100">The safest place to buy and sell.</p>
      </div>

      {/* RECOMMENDATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-l-4 border-orange-500 pl-3">Fresh Recommendations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(`/item/${item.id}`)} // Redirects to Item Detail Page
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-gray-200 relative rounded-t-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />
                <span className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1 w-full truncate">
                  📍 {item.location}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900 line-clamp-2 h-10">{item.title}</h3>
                <p className="text-orange-600 font-bold mt-2 text-lg">RM {item.price.toLocaleString()}</p>
                <div className="mt-3 flex justify-between text-xs text-gray-400">
                  <span>Used</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Criterion 6: FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-6 mb-6 font-medium">
            <a href="#">Help Center</a>
            <a href="#">Safety Guide</a>
            <a href="#">Pro Niaga</a>
            <a href="#">Contact Us</a>
          </div>
          <p>&copy; 2024 MudahPro Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// ROUTER CONFIGURATION
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/item/:id" element={<ItemDetail />} /> {/* Dynamic Route for items */}
      </Routes>
    </BrowserRouter>
  );
}