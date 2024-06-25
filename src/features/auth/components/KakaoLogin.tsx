'use client';

import { API_BASE_URL } from '@/shared/api/constants';
import { Text } from '@/shared/components/shadcn/Text';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoLogin() {
  const params = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (params.get('needLogin') === 'true') {
      toast({
        title: '로그인이 필요한 기능이에요.',
        description: '로그인 페이지로 이동했습니다. 로그인 후 이용해주세요.',
      });
    }
  }, [params, toast]);

  const handleButtonClick = () => {
    window.location.href = `${API_BASE_URL}/api/v1/oauth/kakao`;
  };

  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Text typography="h2" className="font-bold">
        소셜 로그인
      </Text>
      <Text typography="small" className="text-gray-500">
        로그인 하고 가격 변동 알림을 받아보세요!
      </Text>
      <div onClick={handleButtonClick} className="cursor-pointer w-[300px] h-auto mt-8">
        <Image
          src="/kakao_login_large_wide.png"
          width={300}
          height={90}
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="카카오 로그인"
        />
      </div>
    </div>
  );
}
