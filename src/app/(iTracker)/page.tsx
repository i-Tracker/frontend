import { Button } from '@/shared/components/shadcn/ui/button';
import { getCategoryPageLink } from '@/shared/lib/link/page';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Button>
        <Link href={getCategoryPageLink()}>카테코리 상품 보러가기</Link>
      </Button>
    </main>
  );
}
