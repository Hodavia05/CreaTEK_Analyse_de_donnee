import React from 'react';
import { PerformanceMetrics } from '../components/analytics/PerformanceMetrics';
import { TrendAnalysis } from '../components/analytics/TrendAnalysis';
import { CustomerInsights } from '../components/analytics/CustomerInsights';

export function Analytics() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analyses</h1>
        <p className="mt-1 text-sm text-gray-500">
          Explorez les données détaillées et les tendances de votre entreprise
        </p>
      </div>

      <PerformanceMetrics />
      <TrendAnalysis />
      <CustomerInsights />
    </div>
  );
}