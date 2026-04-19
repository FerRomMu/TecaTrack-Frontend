export function formatCurrency(value: string | number): string {
  const numeric = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numeric)) return '--,--';

  return numeric.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
