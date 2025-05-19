import React from 'react';
import myLoopLogo from '../assets/images/my-loop-logo-landing.svg';

export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 mb-2">
              <img src={myLoopLogo} alt="My Loop of Ideas" width={200} height={200} />
            </div>
          </div>
  
          {/* Título e subtítulo */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to your own creative space</h1>
            <p className="text-gray-500 mt-2">Here you can create your new project intelligently with AI features</p>
          </div>
  
          {/* Botão */}
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow">
            Get Started
          </button>
  
          {/* Cards flutuantes */}
          <div className="flex justify-center space-x-2 mt-8 relative">
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-sm text-gray-700">
              <p><strong>Study</strong> for the <strong>entrance exam</strong></p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-sm text-gray-700 scale-110 z-10">
              <p><strong>Create a catalog</strong> for your <strong>business</strong></p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md w-40 text-sm text-gray-700">
              <p><strong>Write your</strong> authentic story</p>
            </div>
          </div>
        </div>
      </div>
    );
  }