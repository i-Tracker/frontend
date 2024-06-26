import { getMainPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import Logo from './logo.svg';

export const Header = () => {
  return (
    <header className="w-full flex items-center">
      <nav className="w-[1080px] h-[70px] flex items-center justify-between mx-auto border-b">
        <Link href={getMainPageLink()}>
          <Logo />
        </Link>
      </nav>
    </header>
  );
};
