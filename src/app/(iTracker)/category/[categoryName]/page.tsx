import { CategoryType } from '@/features/category/constants';
import { Filter } from '@/features/search/components/filter';

export default function CategoryNamePage({ params }: { params: { categoryName: CategoryType } }) {
  return <Filter title="상품 필터" category={params.categoryName} variant={false} />;
}
