import { CategoryType } from '@/features/category/constants';
import { ProductDetail } from '@/features/productDetail/components/ProductDetail';

export default function ProductDetailPage({ params }: { params: { productId: number; category: CategoryType } }) {
  return (
    <main>
      <ProductDetail productId={params.productId} category={params.category} />
    </main>
  );
}
