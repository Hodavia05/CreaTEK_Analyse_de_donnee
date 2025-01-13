import React from 'react';
import { DataGrid } from '../components/sales/DataGrid';
import { SalesFilters } from '../components/sales/SalesFilters';
import { SalesSummary } from '../components/sales/SalesSummary';

export function Sales() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Ventes</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gérez et analysez vos transactions de vente
        </p>
      </div>

      <SalesSummary />
      <SalesFilters />
      <DataGrid />
    </div>
  );
}