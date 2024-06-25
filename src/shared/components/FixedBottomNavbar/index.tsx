import { getCategoryPageLink, getMainPageLink, getMyPageLink } from '@/shared/lib/link/page';
import { CategoryIcon, HomeIcon, NotificationIcon } from '@/shared/assets/Icons';
import { NavItem } from './NavItem';

export const FixedBottomNavbar = () => {
  const navigationItems = [
    {
      link: getMainPageLink(),
      icon: <HomeIcon width={24} height={24} />,
      label: '홈',
    },
    {
      link: `${getCategoryPageLink()}/macbook_air`,
      icon: <CategoryIcon width={24} height={24} />,
      label: '카테고리',
    },
    {
      link: getMyPageLink(),
      icon: <NotificationIcon width={24} height={24} />,
      label: '알림상품',
    },
  ] as const;

  return (
    <div className="w-full h-16 fixed bottom-0 left-0 right-0 rounded-none px-8 border-t bg-white">
      <div className="h-full flex justify-between max-w-[1080px] mx-auto">
        {navigationItems.map((item) => (
          <NavItem key={item.label} link={item.link} Icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};
