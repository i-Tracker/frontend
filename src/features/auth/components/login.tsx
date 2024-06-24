'use client';

import { API_BASE_URL } from '@/shared/api/constants';
import { useToast } from '@/shared/components/shadcn/ui/use-toast';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        onClick={handleButtonClick}
        style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}
      >
        카카오톡 로그인
      </button>
    </div>
  );
}
