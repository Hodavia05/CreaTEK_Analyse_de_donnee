import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendData = [
  { month: 'Jan', clients: 120, engagement: 75 },
  { month: 'Fév', clients: 150, engagement: 80 },
  { month: 'Mar', clients: 180, engagement: 85 },
  { month: 'Avr', clients: 220, engagement: 82 },
  { month: 'Mai', clients: 250, engagement: 88 },
  { month: 'Juin', clients: 280, engagement: 90 }
];

export function TrendAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Analyse des Tendances</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="clients"
              name="Nouveaux Clients"
              stroke="#4f46e5"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="engagement"
              name="Taux d'Engagement (%)"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}