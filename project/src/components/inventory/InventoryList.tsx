import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const inventoryData = [
  {
    id: 1,
    name: 'Bracelet Harmonie',
    sku: 'BRC-001',
    stock: 245,
    minStock: 50,
    price: '19.99 €',
    status: 'En stock'
  },
  {
    id: 2,
    name: 'Bracelet Élégance',
    sku: 'BRC-002',
    stock: 32,
    minStock: 40,
    price: '24.99 €',
    status: 'Stock faible'
  },
  {
    id: 3,
    name: 'Bracelet Nature',
    sku: 'BRC-003',
    stock: 178,
    minStock: 50,
    price: '21.99 €',
    status: 'En stock'
  },
  {
    id: 4,
    name: 'Bracelet Océan',
    sku: 'BRC-004',
    stock: 89,
    minStock: 45,
    price: '22.99 €',
    status: 'En stock'
  }
];

export function InventoryList() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.sku}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.stock}</div>
                  <div className="text-sm text-gray-500">Min: {item.minStock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === 'En stock'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}