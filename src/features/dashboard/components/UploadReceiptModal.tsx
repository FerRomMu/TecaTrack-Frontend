import React, { useState } from 'react';
import { Modal, Button, Upload, Typography, Space, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ReceiptService } from '../../../services/receipt/receipt-service';

interface UploadReceiptModalProps {
  open: boolean;
  onCancel: () => void;
}

export const UploadReceiptModal: React.FC<UploadReceiptModalProps> = ({ open, onCancel }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      await ReceiptService.uploadReceipt(file);
      window.location.reload();
    } catch (error) {
      console.error('Error uploading receipt', error);
      message.error(t('dashboard.upload_receipt.error_uploading') || 'Error al procesar el comprobante');
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    onCancel();
  };

  return (
    <Modal
      title={t('dashboard.upload_receipt.title')}
      open={open}
      onCancel={handleCancel}
      destroyOnHidden
      footer={[
        <Button key="back" onClick={handleCancel} disabled={uploading}>
          {t('common.cancel')}
        </Button>,
        <Button 
          key="submit" 
          type="primary" 
          onClick={handleUpload}
          loading={uploading}
          disabled={!file}
        >
          {t('common.upload')}
        </Button>,
      ]}
    >
      <Space orientation="vertical" align="center" style={{ width: '100%' }} size={8}>
        <Upload 
          beforeUpload={(f) => {
            setFile(f);
            return false;
          }} 
          onRemove={() => setFile(null)}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>{t('common.browse_files')}</Button>
        </Upload>

        <Typography.Text type="secondary">
          {t('dashboard.upload_receipt.select_receipt')}
        </Typography.Text>
      </Space>
    </Modal>
  );
};
