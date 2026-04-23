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
    } catch (error: any) {
      console.error('Error uploading receipt', error);
      message.error(error.message || t('dashboard.upload_receipt.error_uploading'));
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    if (uploading) return;
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
