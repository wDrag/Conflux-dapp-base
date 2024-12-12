/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENV_API_URL: string;
  readonly ENV_MAINNET_RPC_ENDPOINT: string;
  readonly ENV_TESTNET_RPC_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
