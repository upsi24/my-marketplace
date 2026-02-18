import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Sell() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real app, we would verify the user is logged in here
    try {
        // Send data to backend
        // Note: For now we just mock the success because we need to update the backend to accept this
        alert("Item Listed Successfully! (This is a demo until we connect the full backend route)");
        navigate('/');
    } catch (err) {
        alert("Error listing item");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">List an Item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Title</label>
            <input type="text" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. iPhone 15 Pro Max" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price (RM)</label>
            <input type="number" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value={price} onChange={e => setPrice(e.target.value)} placeholder="0.00" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" value={image} onChange={e => setImage(e.target.value)} placeholder="https://..." />
            <p className="text-xs text-gray-500 mt-1">Paste an image link for now (Upload feature coming next)</p>
          </div>

          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Post Ad Now
          </button>
        </form>
      </div>
    </div>
  );
}