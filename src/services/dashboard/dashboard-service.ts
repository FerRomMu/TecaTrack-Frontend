import { apiClient } from '../../shared/utils/apiClient';
import { DashboardData } from '../../features/dashboard/components/types';
import { formatCurrency } from '../../shared/utils/formatcurrency';
import { UserResponse, AccountsResponse } from './types';

export class DashboardService {
  static async getDashboardData(userEmail: string): Promise<DashboardData> {
    const user = await apiClient<UserResponse>(
      `/users/email/${encodeURIComponent(userEmail)}`
    );

    const { accounts, total_balance } = await apiClient<AccountsResponse>(
      `/accounts/user/${user.id}`
    );

    return {
      userName: user.full_name,
      totalBalance: formatCurrency(total_balance),
      accounts: accounts.map((account) => ({
        accountName: account.bank,
        accountBalance: formatCurrency(account.balance),
      })),
    };
  }
}
