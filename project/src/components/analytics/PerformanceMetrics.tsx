import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { category: 'Harmonie', ventes: 4200, objectif: 5000 },
  { category: 'Élégance', ventes: 3800, objectif: 4000 },
  { category: 'Nature', ventes: 3200, objectif: 3500 },
  { category: 'Océan', ventes: 2900, objectif: 3000 }
];

export function PerformanceMetrics() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance par Catégorie</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="ventes" name="Ventes" fill="#4f46e5" />
            <Bar dataKey="objectif" name="Objectif" fill="#9ca3af" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}