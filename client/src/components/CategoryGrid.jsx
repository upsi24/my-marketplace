import React from 'react';

const categories = [
  { name: "Cars", icon: "🚗", color: "bg-blue-100" },
  { name: "Motorcycles", icon: "🏍️", color: "bg-red-100" },
  { name: "Electronics", icon: "📱", color: "bg-green-100" },
  { name: "Property", icon: "🏠", color: "bg-yellow-100" },
  { name: "Jobs", icon: "💼", color: "bg-purple-100" },
  { name: "Services", icon: "🔧", color: "bg-gray-100" },
];

export default function CategoryGrid() {
  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Browse by Category</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition border border-transparent hover:border-gray-200">
              <div className={`w-12 h-12 ${cat.color} rounded-full flex items-center justify-center text-2xl mb-2`}>
                {cat.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}