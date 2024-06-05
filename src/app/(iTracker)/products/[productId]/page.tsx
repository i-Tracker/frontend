import { ProductDetail } from '@/features/productDetail/components/ProductDetail';
import { Text } from '@/shared/components/shadcn/Text';

export default function ProductDetailPage({ params }: { params: { productId: number } }) {
  return (
    <main>
      <Text typography="h4" className="md:text-2xl">
        ID: {params.productId} 제품에 대한 상세페이지 입니다.
      </Text>
      <ProductDetail productId={params.productId} />
    </main>
  );
}
