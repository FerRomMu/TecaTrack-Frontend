import { Layout, Typography, Row, Col, theme } from 'antd';
import { DashboardHeader } from './components/DashboardHeader';
import { TotalBalanceCard } from './components/TotalBalanceCard';
import { AccountBalanceCard } from './components/AccountBalanceCard';
import type { Account } from './components/types';

const { Content } = Layout;
const { Title } = Typography;

export function DashboardPage() {
  const { token } = theme.useToken();

  const userName = 'Alex';
  const totalBalance = '$ 14,500.00';

  const accounts: Account[] = [
    { accountName: 'Santander', accountBalance: '$ 8,200.00' },
    { accountName: 'Mercado Pago', accountBalance: '$ 3,150.00' },
    { accountName: 'BBVA', accountBalance: '$ 1,800.00' },
    { accountName: 'Efectivo', accountBalance: '$ 1,350.00' },
  ];

  const handleUploadReceipt = () => {
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
