import React from 'react';
import { Modal, Button, Upload, message } from 'antd';
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
      destroyOnClose
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleUpload}>
          Subir
        </Button>,
      ]}
    >
      <div style={{ padding: '20px 0', textAlign: 'center' }}>
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button icon={<UploadOutlined />}>Examinar archivos</Button>
        </Upload>
        <p style={{ marginTop: 8, color: '#8c8c8c', fontSize: '12px' }}>
          Selecciona la imagen de tu comprobante.
        </p>
      </div>
    </Modal>
  );
};
