import Link from 'next/link';
import { Text } from '../shadcn/Text';
import { CategoryIcon, HomeIcon, NotificationIcon } from '@/shared/assets/Icons';
import { getCategoryPageLink, getMainPageLink } from '@/shared/lib/link/page';

export const FixedBottomNavbar = () => {
  return (
    <div className="w-full h-16 fixed bottom-0 left-0 right-0 rounded-none px-8 border-t bg-white">
      <div className="h-full flex justify-between">
        <Link
          href={`${getCategoryPageLink()}/macbook_air`}
          className="w-16 flex flex-col items-center justify-center gap-1"
        >
          <CategoryIcon width={24} height={24} />
          <Text typography="small">카테고리</Text>
        </Link>
        <Link href={`${getMainPageLink()}`} className="w-16 flex flex-col items-center justify-center gap-1">
          <HomeIcon width={24} height={24} />
          <Text typography="small">홈</Text>
        </Link>
        <Link
          href={`${getCategoryPageLink()}/macbook_air`}
          className="w-16 flex flex-col items-center justify-center gap-1"
        >
          <NotificationIcon width={24} height={24} />
          <Text typography="small">알림상품</Text>
        </Link>
      </div>
    </div>
  );
};
