'use client';

import { useUserInfo } from '@/features/auth/hooks/useUserInfo';
import { getLoginPageLink, getMyPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn/ui/avatar';
import { Button } from '../shadcn/ui/button';
import { Text } from '../shadcn/Text';
import { isLogin } from '@/features/auth/api/oauth';

export const UserProfile = () => {
  const { data: userInfo } = useUserInfo();

  return isLogin() ? (
    <Link href={getMyPageLink()}>
      <Avatar>
        <AvatarImage src={userInfo?.image} alt="profile-image" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </Link>
  ) : (
    <Link href={getLoginPageLink()}>
      <Button size="sm">
        <Text>로그인</Text>
      </Button>
    </Link>
  );
};
