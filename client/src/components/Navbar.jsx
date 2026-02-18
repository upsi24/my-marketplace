import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          
          {/* 1. LOGO - Redirects to Home */}
          <div onClick={() => navigate('/')} className="flex-shrink-0 cursor-pointer flex items-center gap-1">
            <span className="text-2xl font-extrabold text-blue-800">Mudah</span>
            <span className="text-2xl font-extrabold text-red-600">Pro</span>
          </div>

          {/* 2. SEARCH BAR & LOCATION (The Control Center) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              
              {/* Location Dropdown */}
              <select className="bg-gray-50 text-gray-700 px-3 py-2 border-r border-gray-300 outline-none text-sm">
                <option>Entire Malaysia</option>
                <option>Selangor</option>
                <option>Kuala Lumpur</option>
                <option>Penang</option>
                <option>Johor</option>
              </select>

              {/* Input Field */}
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full px-4 py-2 outline-none text-gray-700"
              />
              
              {/* Search Icon */}
              <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </div>
          </div>

          {/* 3. RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Login / Sign Up */}
            <Link to="/login" className="text-sm font-bold text-gray-700 hover:underline flex items-center gap-1">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Login / Sign Up
            </Link>

            {/* SELL BUTTON (Orange/Red CTA) */}
            <Link to="/sell" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md shadow-md transition transform hover:-translate-y-0.5">
              SELL
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}