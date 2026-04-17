export type Account = {
    accountName: string;
    accountBalance: string;
};

export type DashboardData = {
    userName: string;
    totalBalance: string;
    accounts: Account[];
};
