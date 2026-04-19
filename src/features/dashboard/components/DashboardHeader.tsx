import { Flex, Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

type DashboardHeaderProps = {
  userName: string;
  onUploadClick?: () => void;
};

export function DashboardHeader({ userName, onUploadClick }: DashboardHeaderProps) {
  const { t } = useTranslation();

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
        <Text type="secondary">{t('dashboard.header.welcome', { userName })}</Text>
      </div>

      <Button type="primary" size="large" shape="round" onClick={onUploadClick}>
        {t('dashboard.header.upload_button')}
      </Button>
    </Flex>
  );
}
