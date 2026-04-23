import { useTranslation } from 'react-i18next';

export class ReceiptService {
  static async uploadReceipt(file: File): Promise<void> {
    const { t } = useTranslation();
    const formData = new FormData();
    formData.append('file', file);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

    try {
      const response = await fetch('/api/receipts/upload-receipt', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new Error(t('dashboard.upload_receipt.timeout_error'));
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}
