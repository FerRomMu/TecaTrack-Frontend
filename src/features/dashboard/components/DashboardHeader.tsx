import { Flex, Typography, Button } from 'antd';

const { Title, Text } = Typography;

type DashboardHeaderProps = {
  userName: string;
  onUploadClick?: () => void;
};

export function DashboardHeader({ userName, onUploadClick }: DashboardHeaderProps) {
  return (
    <Flex
      justify="space-between"
      align="center"
      wrap="wrap"
      gap="middle"
      style={{ marginBottom: 24 }}
    >
      <div style={{ flex: 1, minWidth: 180 }}>
        <Title level={3} style={{ margin: 0 }}>
          TecaTrack
        </Title>
        <Text type="secondary">Hola, {userName}</Text>
      </div>

      <Button type="primary" size="large" shape="round" onClick={onUploadClick}>
        Cargar comprobante
      </Button>
    </Flex>
  );
}
