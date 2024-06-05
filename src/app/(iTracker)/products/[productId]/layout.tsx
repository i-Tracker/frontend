import { Text } from '@/shared/components/shadcn/Text';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col py-4">
      <Text typography="h2" className="mb-6 text-center">
        상세페이지
      </Text>
      <Text typography="h4">오늘의 할인율 TOP5</Text>
      <Text typography="p" className="md:text-lg text-gray-500">
        오늘 할인율이 가장 높은 상품리스트
      </Text>
      {children}
    </div>
  );
}
