import React from 'react';
import { TrendingUp, ShoppingCart, Users, CreditCard } from 'lucide-react';

export function SalesSummary() {
  const stats = [
    {
      title: 'Ventes du Mois',
      value: '42,389 €',
      change: '+12.3%',
      icon: TrendingUp,
      trend: 'up'
    },
    {
      title: 'Commandes',
      value: '867',
      change: '+8.7%',
      icon: ShoppingCart,
      trend: 'up'
    },
    {
      title: 'Nouveaux Clients',
      value: '247',
      change: '+22.4%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Panier Moyen',
      value: '48.89 €',
      change: '+4.2%',
      icon: CreditCard,
      trend: 'up'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
            </div>
            <div className="bg-indigo-50 rounded-full p-3">
              <stat.icon className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-600 ml-2">vs mois dernier</span>
          </div>
        </div>
      ))}
    </div>
  );
}