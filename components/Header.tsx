import React from 'react';
import { Activity, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SymptoScan AI</h1>
              <p className="text-xs text-gray-500">Intelligent Health Analysis</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#checker" className="text-gray-600 hover:text-blue-600 transition-colors">Symptom Checker</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>
          <Menu className="h-6 w-6 text-gray-600 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;