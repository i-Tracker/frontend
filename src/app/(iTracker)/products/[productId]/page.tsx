import { Text } from '@/shared/components/shadcn/Text';

export default function ProductDetail({ params }: { params: { productId: number } }) {
  console.log(params);
  return (
    <main>
      <Text typography="h4" className="md:text-2xl">
        상페에지이 입니다.
      </Text>
    </main>
  );
}
