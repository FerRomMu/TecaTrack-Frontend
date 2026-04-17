import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, App as AntApp } from 'antd';
import './index.css';
import App from './App';
import { themeConfig } from './shared/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

async function enableMocking() {
  if (import.meta.env.VITE_USE_MOCKS !== 'true') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <ConfigProvider theme={themeConfig}>
        <AntApp>
          <App />
        </AntApp>
      </ConfigProvider>
    </StrictMode>
  );
});
