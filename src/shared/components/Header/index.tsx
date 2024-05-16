import { getMainPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import Logo from './logo.svg';
import { Text } from '../shadcn/Text';
import { Button } from '../shadcn/ui/button';

export const Header = () => {
  return (
    <header className="w-full flex items-center">
      <nav className="w-[1080px] h-[70px] flex items-center justify-between mx-auto p-4 border-b">
        <Link href={getMainPageLink()}>
          <Logo />
        </Link>
        <Button>
          <Text>로그인</Text>
        </Button>
      </nav>
    </header>
  );
};
