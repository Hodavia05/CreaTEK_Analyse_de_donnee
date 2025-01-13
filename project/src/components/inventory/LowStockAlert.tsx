import React from 'react';
import { AlertCircle } from 'lucide-react';

export function LowStockAlert() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            <span className="font-medium">Attention:</span> 3 produits sont en stock faible et nécessitent un réapprovisionnement.
          </p>
        </div>
      </div>
    </div>
  );
}