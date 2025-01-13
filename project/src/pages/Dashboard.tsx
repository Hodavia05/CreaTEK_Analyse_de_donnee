import React from 'react';
import { SalesOverview } from '../components/dashboard/SalesOverview';
import { SalesChart } from '../components/dashboard/SalesChart';
import { TopProducts } from '../components/dashboard/TopProducts';

export function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
        <p className="mt-1 text-sm text-gray-500">
          Aperçu des performances de vente et des tendances
        </p>
      </div>
      
      <SalesOverview />
      <SalesChart />
      <TopProducts />
    </div>
  );
}