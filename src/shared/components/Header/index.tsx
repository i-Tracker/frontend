'use client';

import { getLoginPageLink, getMainPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import Logo from './logo.svg';
import { UserProfile } from '../UserProfile';
import { isLogin } from '@/features/auth/api/oauth';
import { Button } from '../shadcn/ui/button';
import { Text } from '../shadcn/Text';
import { Suspense } from 'react';

export const Header = () => {
  return (
    <header className="w-full flex items-center">
      <nav className="w-[1080px] h-[70px] flex items-center justify-between mx-auto border-b">
        <Link href={getMainPageLink()}>
          <Logo />
        </Link>
        {isLogin() ? (
          <Suspense fallback={<div>asd</div>}>
            <UserProfile />
          </Suspense>
        ) : (
          <Link href={getLoginPageLink()}>
            <Button size="sm">
              <Text>로그인</Text>
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};
