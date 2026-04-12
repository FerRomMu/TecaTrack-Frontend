import React from 'react';
import { ConfigProvider, theme, Layout, Typography, Button, Card, Row, Col } from 'antd';
import './App.css'; // Import the new CSS

const { Content } = Layout;
const { Title, Text } = Typography;

// --- Sub-components ---

const AppTitle = () => (
  <Title level={3} className="app-title">
    TecaTrack
  </Title>
);

const UserGreeting = ({ nombreUsuario }) => (
  <Text type="secondary" className="user-greeting">
    Hola, {nombreUsuario}
  </Text>
);

const UploadReceiptButton = () => (
  <Button type="primary" size="large">
    Cargar comprobante
  </Button>
);

const DashboardHeader = ({ nombreUsuario }) => (
  <Row justify="space-between" align="middle" className="dashboard-header">
    <Col>
      <AppTitle />
      <UserGreeting nombreUsuario={nombreUsuario} />
    </Col>
    <Col>
      <UploadReceiptButton />
    </Col>
  </Row>
);

const TotalBalanceCard = ({ totalGlobal }) => (
  <Card
    className="total-card"
    variant="outlined"
  >
    <div className="card-content-flex total-card-content">
      <Text className="total-label">
        Total
      </Text>
      <Title level={1} className="total-value">
        {totalGlobal}
      </Title>
    </div>
  </Card>
);

const AccountBalanceCard = ({ nombreCuenta, totalCuenta }) => (
  <Card
    className="account-card"
    variant="outlined"
  >
    <div className="card-content-flex account-card-content">
      <Text className="account-name">
        {nombreCuenta}
      </Text>
      <Title level={3} className="account-value">
        {totalCuenta}
      </Title>
    </div>
  </Card>
);

const AccountsGrid = ({ cuentas }) => (
  <Row gutter={[16, 16]}>
    {cuentas.map((cuenta, index) => (
      <Col xs={24} sm={12} key={index}>
        <AccountBalanceCard nombreCuenta={cuenta.nombreCuenta} totalCuenta={cuenta.totalCuenta} />
      </Col>
    ))}
  </Row>
);

// --- Main App ---

const themeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: '#0B0F14',
    colorTextBase: '#E6EEF8',
    colorTextDescription: '#9FB0C3',
    colorPrimary: '#1677FF',
    colorSuccess: '#22C55E',
    colorBorderSecondary: '#1E2A3A',
  },
  components: {
    Layout: {
      bodyBg: '#0B0F14',
    },
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      boxShadow: 'none',
    },
    Card: {
      boxShadow: '0 2px 10px -2px rgba(0,0,0,0.2)',
      colorBgContainer: '#121923',
      colorBorderSecondary: '#1E2A3A',
      paddingLG: 24,
      borderRadiusLG: 16,
    },
    Typography: {
      colorTextHeading: '#E6EEF8',
      titleMarginBottom: 0,
      titleMarginTop: 0,
    }
  }
};

function App() {
  const nombreUsuario = "Alex";
  const totalGlobal = "$ 14,500.00";
  const cuentasMock = [
    { nombreCuenta: "Santander", totalCuenta: "$ 8,200.00" },
    { nombreCuenta: "Mercado Pago", totalCuenta: "$ 3,150.00" },
    { nombreCuenta: "BBVA", totalCuenta: "$ 1,800.00" },
    { nombreCuenta: "Efectivo", totalCuenta: "$ 1,350.00" },
  ];

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className="app-layout">
        <Content className="app-content">
          <DashboardHeader nombreUsuario={nombreUsuario} />
          <TotalBalanceCard totalGlobal={totalGlobal} />
          <AccountsGrid cuentas={cuentasMock} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
