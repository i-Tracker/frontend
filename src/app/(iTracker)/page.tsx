import { Text } from '@/shared/components/shadcn/Text';

export default function Home() {
  return (
    <main>
      <Text typography="h4" className="md:text-2xl">
        오늘의 할인율 TOP5
      </Text>
      <Text typography="p" className="md:text-lg text-gray-500">
        오늘 할인율이 가장 높은 상품리스트
      </Text>
    </main>
  );
}
