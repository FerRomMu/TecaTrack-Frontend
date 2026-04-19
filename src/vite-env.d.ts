/// <reference types="vite/client" />
declare module '*.css';

interface ImportMetaEnv {
  readonly VITE_USE_MOCKS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
