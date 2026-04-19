import React from 'react';
import { Modal, Button, Upload, Typography, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UploadReceiptModalProps {
  open: boolean;
  onCancel: () => void;
}

export const UploadReceiptModal: React.FC<UploadReceiptModalProps> = ({ open, onCancel }) => {
  const handleUpload = () => {
    console.log(`Se subio el comprobante`);
    onCancel();
  };

  return (
    <Modal
      title="Cargar Comprobante"
      open={open}
      onCancel={onCancel}
      destroyOnHidden
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleUpload}>
          Subir
        </Button>,
      ]}
    >
      <Space orientation="vertical" align="center" style={{ width: '100%' }} size={8}>
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button icon={<UploadOutlined />}>Examinar archivos</Button>
        </Upload>

        <Typography.Text type="secondary">Selecciona la imagen de tu comprobante.</Typography.Text>
      </Space>
    </Modal>
  );
};
