import React from 'react';
import { BarChart3, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-xl font-semibold text-gray-900">BraceletStats</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-indigo-600">Tableau de bord</a>
            <a href="#sales" className="text-gray-700 hover:text-indigo-600">Ventes</a>
            <a href="#inventory" className="text-gray-700 hover:text-indigo-600">Inventaire</a>
            <a href="#analytics" className="text-gray-700 hover:text-indigo-600">Analyses</a>
          </nav>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}