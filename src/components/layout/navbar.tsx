import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navbar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <span className="bg-white"> Test drive</span>
      <ConnectButton />
    </div>
  );
};
