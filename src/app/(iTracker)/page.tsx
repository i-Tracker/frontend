import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>로딩중...</div>}>
        <Text typography="h1">상품 리스트</Text>
      </Suspense>
    </main>
  );
}
