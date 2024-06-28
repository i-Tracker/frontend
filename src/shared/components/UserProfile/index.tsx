'use client';

import { Text } from '../shadcn/Text';
import { Avatar, AvatarFallback, AvatarImage } from '../shadcn/ui/avatar';
import { useUserInfo } from '@/features/auth/hooks/useUserInfo';
import { Button } from '../shadcn/ui/button';
import { logout } from '@/features/auth/api/oauth';

export const UserProfile = () => {
  const { data: userInfo } = useUserInfo();

  const handleClickLogoutButton = () => {
    logout();
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={userInfo?.image} alt="profile-image" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <Text typography="h4" className="inline">
        {userInfo?.nickname}
      </Text>
      <Text className="inline">님 안녕하세요!</Text>
      <div>
        <Button variant="outline" size="sm" onClick={handleClickLogoutButton}>
          로그아웃
        </Button>
      </div>
    </div>
  );
};
