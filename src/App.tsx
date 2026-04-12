import { Layout, Typography, Button, Card, Row, Col, Flex, theme } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

/**
 * Types
 */
type DashboardHeaderProps = {
  userName: string;
  onUploadClick?: () => void;
};

type TotalBalanceCardProps = {
  totalBalance: string;
};

type AccountBalanceCardProps = {
  accountName: string;
  accountBalance: string;
};

type Account = {
  accountName: string;
  accountBalance: string;
};

/**
 * Components
 */
function DashboardHeader({ userName, onUploadClick }: DashboardHeaderProps) {
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

function TotalBalanceCard({ totalBalance }: TotalBalanceCardProps) {
  const { token } = theme.useToken();

  return (
    <Card
      style={{
        marginBottom: 24,
        background: `linear-gradient(135deg, ${token.colorBgContainer} 0%, ${token.colorBgElevated} 100%)`,
        border: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      <Flex vertical gap={4}>
        <Text type="secondary" style={{ fontSize: 12, letterSpacing: 0.5 }}>
          BALANCE TOTAL
        </Text>

        <Title level={1} style={{ margin: 0, color: token.colorPrimary }}>
          {totalBalance}
        </Title>
      </Flex>
    </Card>
  );
}

function AccountBalanceCard({ accountName, accountBalance }: AccountBalanceCardProps) {
  return (
    <Card hoverable>
      <Flex vertical gap={4}>
        <Text strong>{accountName}</Text>
        <Title level={4} style={{ margin: 0 }}>
          {accountBalance}
        </Title>
      </Flex>
    </Card>
  );
}

/**
 * Page (Layout)
 */
export default function DashboardPage() {
  const { token } = theme.useToken();

  // TODO: reemplazar por datos reales (API + Auth context)
  const userName = 'Alex';
  const totalBalance = '$ 14,500.00';

  // TODO: reemplazar por datos reales (API)
  const accounts: Account[] = [
    { accountName: 'Santander', accountBalance: '$ 8,200.00' },
    { accountName: 'Mercado Pago', accountBalance: '$ 3,150.00' },
    { accountName: 'BBVA', accountBalance: '$ 1,800.00' },
    { accountName: 'Efectivo', accountBalance: '$ 1,350.00' },
  ];

  const handleUploadReceipt = () => {
    // TODO: abrir modal / navegar a pantalla de carga
    console.log('Upload receipt clicked');
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: token.colorBgBase }}>
      <Content
        style={{
          padding: '24px 16px',
          maxWidth: 900,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <DashboardHeader userName={userName} onUploadClick={handleUploadReceipt} />

        <TotalBalanceCard totalBalance={totalBalance} />

        <Title level={5} style={{ marginBottom: 16 }}>
          Mis Cuentas
        </Title>

        <Row gutter={[16, 16]}>
          {accounts.map((account) => (
            <Col xs={24} sm={12} key={account.accountName}>
              <AccountBalanceCard {...account} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}
