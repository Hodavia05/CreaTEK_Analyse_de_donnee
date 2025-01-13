import React from 'react';
import { InventoryList } from '../components/inventory/InventoryList';
import { InventoryStats } from '../components/inventory/InventoryStats';
import { LowStockAlert } from '../components/inventory/LowStockAlert';

export function Inventory() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Inventaire</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gérez votre stock de bracelets et suivez les niveaux d'inventaire
        </p>
      </div>

      <LowStockAlert />
      <InventoryStats />
      <InventoryList />
    </div>
  );
}