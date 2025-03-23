import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;