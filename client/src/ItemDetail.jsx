import React from 'react';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';

// 👇👇 THIS LINE BELOW IS WHAT WAS MISSING OR BROKEN 👇👇
export default function ItemDetail() {
  const { id } = useParams(); 

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-sm text-gray-500 mb-4">Home &gt; Electronics &gt; Item #{id}</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-96 bg-black flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80" className="h-full object-contain" alt="Item" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">iPhone 15 Pro Max</h1>
              <p className="text-gray-700 leading-relaxed">
                Condition 9.9/10 like new. Battery health 98%. Full set box included. 
                Warranty until Dec 2026. COD available in KL area or use Escrow for postage.
              </p>
            </div>
          </div>

          {/* RIGHT: Price & Actions */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm mb-1">Price</p>
              <h2 className="text-4xl font-extrabold text-blue-600">RM 4,200</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Seller: Amir Gadget</h4>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg">
                <span>🛡️</span> Buy with SafePay (Escrow)
              </button>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800">
              <h5 className="font-bold flex items-center gap-2 mb-2">⚠️ Safety Tips</h5>
              <ul className="list-disc pl-4 space-y-1">
                <li>Meet in a public place.</li>
                <li>Check the item before paying.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}