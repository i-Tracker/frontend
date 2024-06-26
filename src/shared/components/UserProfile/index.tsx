'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../shadcn/ui/avatar';
import { useUserInfo } from '@/features/auth/hooks/useUserInfo';

export const UserProfile = () => {
  const { data: userInfo } = useUserInfo();

  return (
    <Avatar>
      <AvatarImage src={userInfo?.image} alt="profile-image" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
};
