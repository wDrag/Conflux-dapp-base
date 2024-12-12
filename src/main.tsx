import { useGSAP } from '@gsap/react';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import gsap from 'gsap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { WagmiProvider } from 'wagmi';

import { appRouter } from '@/Router';
import { wagmiConfig } from '@/wagmiConfig';

import './index.css';

const queryClient = new QueryClient();
gsap.registerPlugin(useGSAP);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} coolMode>
          <RouterProvider router={appRouter} />
          <Toaster
            theme="dark"
            richColors
            position="top-center"
            visibleToasts={1}
            toastOptions={{
              className: 'rounded-2xl shadow-lg border-none',
              classNames: {
                success: 'bg-dark-success text-white text-sm',
                error: 'bg-dark-error text-white text-sm',
                warning: 'bg-dark-warning text-white text-sm',
                info: 'bg-dark-primary text-white text-sm',
                title: 'whitespace-pre-line',
              },
            }}
          />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
