import React from 'react';
import logo from "../assets/logo.svg";
import FloatingCards from '../components/FloatingCards';

export default function LandingPage() {
  const cards = [
    <p><strong>Study</strong> for the <strong>entrance exam</strong></p>,
    <p><strong>Create a catalog</strong> for your <strong>business</strong></p>,
    <p><strong>Write your</strong> authentic story</p>,
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-2">
            <img src={logo} alt="My Loop of Ideas" width={200} height={200} />
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

        {/* Carrossel flutuante */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-4 max-w-[90%] md:max-w-xl">
            <FloatingCards items={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}
