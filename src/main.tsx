import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, App as AntApp } from 'antd';
import './index.css';
import App from './App';
import { themeConfig } from './shared/theme';
import { enableMocking } from './mocks/enable-mocking';

await enableMocking();
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <AntApp>
        <App />
      </AntApp>
    </ConfigProvider>
  </StrictMode>
);
