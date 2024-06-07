import { ProductDetail } from '@/features/productDetail/components/ProductDetail';

export default function ProductDetailPage({ params }: { params: { productId: number } }) {
  return (
    <main>
      <ProductDetail productId={params.productId} />
    </main>
  );
}
