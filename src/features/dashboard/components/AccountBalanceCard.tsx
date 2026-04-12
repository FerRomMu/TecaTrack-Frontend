import { Card, Flex, Typography } from 'antd';

const { Title, Text } = Typography;

type AccountBalanceCardProps = {
  accountName: string;
  accountBalance: string;
};

export function AccountBalanceCard({ accountName, accountBalance }: AccountBalanceCardProps) {
  return (
    <Card>
      <Flex vertical gap={4}>
        <Text strong>{accountName}</Text>
        <Title level={4} style={{ margin: 0 }}>
          {accountBalance}
        </Title>
      </Flex>
    </Card>
  );
}
