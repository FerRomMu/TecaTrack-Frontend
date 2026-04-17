import { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col, theme, Spin, Alert } from 'antd';
import { DashboardHeader } from './components/DashboardHeader';
import { TotalBalanceCard } from './components/TotalBalanceCard';
import { AccountBalanceCard } from './components/AccountBalanceCard';
import type { DashboardData } from './components/types';
import { DashboardService } from '../../services/dashboard/dashboard-service';

const { Content } = Layout;
const { Title } = Typography;

export function DashboardPage() {
  const { token } = theme.useToken();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await DashboardService.getDashboardData();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Ocurrió un error al cargar los datos del dashboard.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleUploadReceipt = () => {
    console.log('Upload receipt clicked');
  };

  if (loading) {
    return (
      <Layout style={{ minHeight: '100vh', backgroundColor: token.colorBgBase, justifyContent: 'center', alignItems: 'center' }}>
        <Spin size="large" description="Cargando resumen..." />
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout style={{ minHeight: '100vh', backgroundColor: token.colorBgBase, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        <Alert title="Error" description={error || 'No se pudieron cargar los datos'} type="error" showIcon />
      </Layout>
    );
  }

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
        <DashboardHeader userName={data.userName} onUploadClick={handleUploadReceipt} />

        <TotalBalanceCard totalBalance={data.totalBalance} />

        <Title level={5} style={{ marginBottom: 16 }}>
          Mis Cuentas
        </Title>

        <Row gutter={[16, 16]}>
          {data.accounts.map((account) => (
            <Col xs={24} sm={12} key={account.accountName}>
              <AccountBalanceCard {...account} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}
