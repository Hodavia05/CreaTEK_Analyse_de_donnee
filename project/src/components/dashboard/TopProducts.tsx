import React from 'react';

const topProducts = [
  {
    name: 'Bracelet Harmonie',
    sales: 1234,
    revenue: '24,680 €',
    growth: '+15.3%'
  },
  {
    name: 'Bracelet Élégance',
    sales: 982,
    revenue: '19,640 €',
    growth: '+12.1%'
  },
  {
    name: 'Bracelet Nature',
    sales: 879,
    revenue: '17,580 €',
    growth: '+9.4%'
  },
  {
    name: 'Bracelet Océan',
    sales: 654,
    revenue: '13,080 €',
    growth: '+7.8%'
  }
];

export function TopProducts() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Produits les Plus Vendus</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Produit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ventes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenus
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Croissance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {topProducts.map((product) => (
              <tr key={product.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.revenue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  {product.growth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}