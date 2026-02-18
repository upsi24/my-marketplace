import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sell() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // New state for file
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Use FormData to send files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    if (image) {
      formData.append('image', image); // Must match 'upload.single' name in backend
    }

    try {
      // 2. Send to your Backend
      await axios.post('https://my-marketplace-backend.vercel.app/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Crucial for files!
        },
      });
      alert('Product Uploaded!');
      navigate('/');
    } catch (error) {
      console.error("Error uploading:", error);
      alert('Failed to upload');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sell an Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" placeholder="Title" className="w-full border p-2"
          value={title} onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="number" placeholder="Price" className="w-full border p-2"
          value={price} onChange={(e) => setPrice(e.target.value)} 
        />
        <textarea 
          placeholder="Description" className="w-full border p-2"
          value={description} onChange={(e) => setDescription(e.target.value)} 
        />
        
        {/* New File Input */}
        <input 
          type="file" 
          accept="image/*"
          className="w-full border p-2"
          onChange={(e) => setImage(e.target.files[0])} 
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Post Ad
        </button>
      </form>
    </div>
  );
}

export default Sell;