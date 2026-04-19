import React from 'react';
import { Modal, Button, Upload, Typography, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface UploadReceiptModalProps {
  open: boolean;
  onCancel: () => void;
}

export const UploadReceiptModal: React.FC<UploadReceiptModalProps> = ({ open, onCancel }) => {
  const { t } = useTranslation();

  const handleUpload = () => {
    console.log(`Se subio el comprobante`);
    onCancel();
  };

  return (
    <Modal
      title={t('dashboard.upload_receipt.title')}
      open={open}
      onCancel={onCancel}
      destroyOnHidden
      footer={[
        <Button key="back" onClick={onCancel}>
          {t('common.cancel')}
        </Button>,
        <Button key="submit" type="primary" onClick={handleUpload}>
          {t('common.upload')}
        </Button>,
      ]}
    >
      <Space orientation="vertical" align="center" style={{ width: '100%' }} size={8}>
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button icon={<UploadOutlined />}>{t('common.browse_files')}</Button>
        </Upload>

        <Typography.Text type="secondary">
          {t('dashboard.upload_receipt.select_receipt')}
        </Typography.Text>
      </Space>
    </Modal>
  );
};
