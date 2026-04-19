export type UserResponse = {
  id: string;
  full_name: string;
  email: string;
  created_at: string;
};

export type AccountResponse = {
  id: string;
  bank: string;
  balance: string;
  cbu: string;
  user_id: string;
};

export type AccountsResponse = {
  accounts: AccountResponse[];
  total_balance: string;
};
