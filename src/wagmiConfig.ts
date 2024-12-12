import { createConfig, http } from 'wagmi';
import { confluxESpace, confluxESpaceTestnet } from 'wagmi/chains';

import { env } from '@/constants';

export const wagmiConfig = createConfig({
  chains: [confluxESpace, confluxESpaceTestnet],
  transports: {
    [confluxESpace.id]: http(env.ENV_MAINNET_RPC_ENDPOINT),
    [confluxESpaceTestnet.id]: http(env.ENV_TESTNET_RPC_ENDPOINT),
  },
});
