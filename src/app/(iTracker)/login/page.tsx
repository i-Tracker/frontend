'use client';

import { API_BASE_URL } from '@/shared/api/constants';

export default function LoginPage() {
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
