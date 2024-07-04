import FavoritesList from '@/features/my/components/FavoritesList';
import { UserProfile } from '@/shared/components/UserProfile';
import { Text } from '@/shared/components/shadcn/Text';

export default function MyPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-12">
        <UserProfile />
      </div>
      <Text typography="h4">알림상품</Text>
      <div className="flex flex-wrap gap-1">
        <Text typography="small" className="text-gray-500">
          가격이 변할 때마다
        </Text>
        <Text typography="small" className="text-gray-500">
          매일 18시에 카카오톡 알림을 보내드려요!
        </Text>
      </div>
      <FavoritesList />
    </div>
  );
}
