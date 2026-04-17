import { useState, useEffect } from 'react';
import type { DashboardData } from '../components/types';
import { DashboardService } from '../../../services/dashboard/dashboard-service';

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await DashboardService.getDashboardData();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Ocurrió un error al cargar los datos del dashboard.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return { data, loading, error };
}
