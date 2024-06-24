'use client';

import { isLogin, logout } from '@/features/auth/api/oauth';
import { useUserInfo } from '@/features/auth/hooks/useUserInfo';
import { Text } from '@/shared/components/shadcn/Text';
import { Button } from '@/shared/components/shadcn/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MyPage() {
  const router = useRouter();
  const { data: userInfo } = useUserInfo();

  useEffect(() => {
    if (!isLogin()) {
      router.push('/login?needLogin=true');
    }
  }, [router, userInfo]);

  const handleClickLogoutButton = () => {
    logout();
  };

  return (
    <div>
      <Text typography="h4" className="inline">
        {userInfo?.nickname}
      </Text>
      <Text className="inline">님 안녕하세요!</Text>
      <Button onClick={handleClickLogoutButton}>로그아웃</Button>
    </div>
  );
}
