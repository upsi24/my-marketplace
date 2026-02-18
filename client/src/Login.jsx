import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? '/api/register' : '/api/login';
    const payload = isRegister ? { email, password, username: email.split('@')[0] } : { email, password };

    try {
      // connecting to the backend we built earlier
      const res = await axios.post(`http://localhost:5000${endpoint}`, payload);
      
      if (!isRegister) {
        localStorage.setItem('token', res.data.token); // Save the digital ID card
        alert('Login Successful!');
        navigate('/'); // Go back home
      } else {
        alert('Registration Successful! Please log in.');
        setIsRegister(false);
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-200">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          {isRegister ? 'Join MudahPro' : 'Welcome Back'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-md">
            {isRegister ? 'Create Account' : 'Log In'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isRegister ? "Already have an account?" : "New to MudahPro?"}
          <span 
            className="text-blue-600 font-bold cursor-pointer ml-1 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}