import { Outlet } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Navbar } from '@/components/layout';
import { env } from '@/constants';

const AppLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <>{env.ENV_MAINNET_RPC_ENDPOINT || 'undefined'}</>,
      },
    ],
  },
]);
