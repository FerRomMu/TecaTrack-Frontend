import { http, HttpResponse, delay } from 'msw';
import { DashboardData } from '../features/dashboard/components/types';

export const handlers = [
  http.get('/api/dashboard', async () => {
    await delay(1200);
    const mockData: DashboardData = {
      userName: 'Alex',
      totalBalance: '$ 14,500.00',
      accounts: [
        { accountName: 'Santander', accountBalance: '$ 8,200.00' },
        { accountName: 'Mercado Pago', accountBalance: '$ 3,150.00' },
        { accountName: 'BBVA', accountBalance: '$ 1,800.00' },
        { accountName: 'Efectivo', accountBalance: '$ 1,350.00' },
      ],
    };

    return HttpResponse.json(mockData);
  }),
];
