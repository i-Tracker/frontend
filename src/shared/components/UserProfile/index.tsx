'use client';

import { getMyPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn/ui/avatar';
import { useUserInfo } from '@/features/auth/hooks/useUserInfo';

export const UserProfile = () => {
  const { data: userInfo } = useUserInfo();

  return (
    <Link href={getMyPageLink()}>
      <Avatar>
        <AvatarImage src={userInfo?.image} alt="profile-image" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </Link>
  );
};
