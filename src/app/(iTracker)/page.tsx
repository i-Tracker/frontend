import { Button } from '@/shared/components/shadcn/ui/button';
import { getCategoryPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>로딩중...</div>}>
        <Button>
          <Link href={getCategoryPageLink()}>카테코리 상품 보러가기</Link>
        </Button>
      </Suspense>
    </main>
  );
}
