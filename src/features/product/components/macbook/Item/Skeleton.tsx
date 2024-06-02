import { Skeleton } from '@/shared/components/shadcn/ui/skeleton';

export const ProductItemSkeleton = () => {
  return (
    <li className="w-full h-[430px]">
      <div className="w-[180px] flex flex-col items-start gap-4">
        <Skeleton className="flex items-center justify-center w-[180px] h-[120px] bg-neutral-100 rounded"></Skeleton>
        <Skeleton className="w-[120px] h-[16px] rounded"></Skeleton>
        <Skeleton className="w-[120px] h-[16px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[10px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[20px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[10px] rounded"></Skeleton>
        <Skeleton className="w-[70px] h-[10px] rounded"></Skeleton>
        <div>
          <Skeleton className="w-[70px] h-[20px] rounded"></Skeleton>
        </div>
      </div>
    </li>
  );
};
