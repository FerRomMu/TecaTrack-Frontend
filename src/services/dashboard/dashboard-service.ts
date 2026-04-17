import { DashboardData } from "../../features/dashboard/components/types";

export class DashboardService {
  static async getDashboardData(): Promise<DashboardData> {
    const response = await fetch('/api/dashboard');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
}
