import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Real-Time Collaboration Made Simple</h1>
        <p className="text-xl mb-8">Create, edit, and collaborate simultaneously with your team</p>
        <div className="space-x-4">
          <Link 
            to="/register" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </Link>
          <Link 
            to="/login" 
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;