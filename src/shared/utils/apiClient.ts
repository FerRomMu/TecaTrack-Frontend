export async function apiClient<T>(endpoint: string): Promise<T> {
  const response = await fetch(`/api${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
