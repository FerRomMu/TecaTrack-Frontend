import { Card, Flex, Typography, theme } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

type TotalBalanceCardProps = {
  totalBalance: string;
};

export function TotalBalanceCard({ totalBalance }: TotalBalanceCardProps) {
  const { token } = theme.useToken();
  const { t } = useTranslation();

  return (
    <Card
      style={{
        marginBottom: 24,
        background: `linear-gradient(135deg, ${token.colorBgContainer} 0%, ${token.colorBgElevated} 100%)`,
        border: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      <Flex vertical gap={4}>
        <Text
          type="secondary"
          style={{ fontSize: 12, letterSpacing: 0.5, textTransform: 'uppercase' }}
        >
          {t('dashboard.total_balance.title')}
        </Text>

        <Title level={1} style={{ margin: 0, color: token.colorPrimary }}>
          {totalBalance}
        </Title>
      </Flex>
    </Card>
  );
}
