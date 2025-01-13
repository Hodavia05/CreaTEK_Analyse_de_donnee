import { SalesData, TimeRange } from '../types/sales';

export const timeRanges: TimeRange[] = [
  { label: 'Cette Année', value: 'year' },
  { label: '6 Derniers Mois', value: '6months' },
  { label: '30 Derniers Jours', value: '30days' }
];

export const salesData: SalesData[] = [
  { month: 'Jan', ventes: 45000, objectif: 40000 },
  { month: 'Fév', ventes: 52000, objectif: 42000 },
  { month: 'Mar', ventes: 48000, objectif: 44000 },
  { month: 'Avr', ventes: 61000, objectif: 46000 },
  { month: 'Mai', ventes: 55000, objectif: 48000 },
  { month: 'Juin', ventes: 67000, objectif: 50000 },
  { month: 'Juil', ventes: 72000, objectif: 52000 },
  { month: 'Août', ventes: 69000, objectif: 54000 },
  { month: 'Sep', ventes: 78000, objectif: 56000 },
  { month: 'Oct', ventes: 83000, objectif: 58000 },
  { month: 'Nov', ventes: 89000, objectif: 60000 },
  { month: 'Déc', ventes: 95000, objectif: 62000 }
];