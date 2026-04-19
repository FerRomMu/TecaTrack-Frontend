import { useState, useEffect } from 'react';
import type { DashboardData } from '../components/types';
import { DashboardService } from '../../../services/dashboard/dashboard-service';

export function useDashboardData(email: string | null) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setLoading(false);
      return;
    }
    const safeEmail = email;

    async function loadData() {
      try {
        setLoading(true);
        const result = await DashboardService.getDashboardData(safeEmail);
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
  }, [email]);

  return { data, loading, error };
}
