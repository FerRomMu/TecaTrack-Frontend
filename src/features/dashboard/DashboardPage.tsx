import { Layout, Typography, Row, Col, theme } from 'antd';
import { DashboardHeader } from './components/DashboardHeader';
import { TotalBalanceCard } from './components/TotalBalanceCard';
import { AccountBalanceCard } from './components/AccountBalanceCard';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingState, ErrorState } from '../../shared/components/StateFeedback';
import { useState } from 'react';
import { UploadReceiptModal } from './components/UploadReceiptModal';

const { Content } = Layout;
const { Title } = Typography;

export function DashboardPage() {
  const { token } = theme.useToken();
  const { data, loading, error } = useDashboardData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: token.colorBgBase }}>
      {loading ? (
        <LoadingState message="Cargando resumen..." />
      ) : error || !data ? (
        <ErrorState description={error || 'No se pudieron cargar los datos'} />
      ) : (
        <Content
          style={{
            padding: '24px 16px',
            maxWidth: '900px',
            margin: '0 auto',
            width: '100%',
            flex: 1,
          }}
        >
          <DashboardHeader userName={data.userName} onUploadClick={handleOpenModal} />

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
          <UploadReceiptModal open={isModalOpen} onCancel={handleCloseModal} />
        </Content>
      )}
    </Layout>
  );
}
