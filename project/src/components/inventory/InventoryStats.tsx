import React from 'react';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

export function InventoryStats() {
  const stats = [
    {
      title: 'Total Produits',
      value: '24',
      icon: Package,
      description: 'Produits actifs'
    },
    {
      title: 'Stock Faible',
      value: '3',
      icon: AlertTriangle,
      description: 'Produits à réapprovisionner'
    },
    {
      title: 'Valeur Stock',
      value: '12,458 €',
      icon: DollarSign,
      description: 'Valeur totale'
    },
    {
      title: 'Rotation Stock',
      value: '4.2',
      icon: TrendingUp,
      description: 'Rotations par an'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-indigo-50 rounded-full p-3">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}