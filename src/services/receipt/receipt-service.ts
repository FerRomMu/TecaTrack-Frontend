import i18n from '../../shared/i18n/i18n';

export class ReceiptService {
  static async uploadReceipt(file: File): Promise<void> {
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
    } catch {
      throw new Error(i18n.t('dashboard.upload_receipt.error_uploading'));
    } finally {
      clearTimeout(timeoutId);
    }
  }
}
