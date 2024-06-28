import FavoritesList from '@/features/my/components/FavoritesList';
import { Loading } from '@/shared/components/Loading';
import { UserProfile } from '@/shared/components/UserProfile';
import { Text } from '@/shared/components/shadcn/Text';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function MyPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-12">
        <UserProfile />
      </div>
      <Text typography="h4">알림상품</Text>
      <Text typography="p" className="md:text-lg text-gray-500">
        가격이 변할 때마다 카카오톡 알림을 보내드려요!
      </Text>

      <ErrorBoundary
        fallback={
          <Text typography="small" className="text-badge">
            알림상품을 불러오지 못했어요
          </Text>
        }
      >
        <Suspense
          fallback={
            <div className="p-8">
              <Loading />
            </div>
          }
        >
          <FavoritesList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
