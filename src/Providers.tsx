import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { confluxESpaceTestnet } from 'wagmi/chains';

import { wagmiConfig } from '@/wagmiConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Providers = ({ children }: { children: any }) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={confluxESpaceTestnet} theme={darkTheme()} coolMode>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
