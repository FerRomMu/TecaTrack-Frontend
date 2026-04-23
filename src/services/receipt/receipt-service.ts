export class ReceiptService {
  static async uploadReceipt(file: File): Promise<void> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/receipts/upload-receipt', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }
}
