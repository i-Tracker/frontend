import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/category/macbook_air');
  // return (
  //   <main>
  //     <Suspense fallback={<CategoryListSkeleton />}>
  //       <CategoryList />
  //     </Suspense>
  //   </main>
  // );
}
