'use client';

import { CategoryType, categoryMap } from '@/features/category/constants';
import { Button } from '@/shared/components/shadcn/ui/button';
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from '@/shared/components/shadcn/ui/dialog';
import { useGetProperty } from '../../hooks/useFilterProperty';
import { FilterProperty } from '../../api/getFilterProperty';
import { useEffect, useState } from 'react';
import { FilterList } from './macbook';

export const Filter = ({ category }: { category: CategoryType }) => {
  const categoryName = categoryMap[category];
  const [selectedFilters, setSelectedFilters] = useState<FilterProperty>({
    size: [],
    color: [],
    processor: [],
    storage: [],
    memory: [],
  });

  const { data: filterData } = useGetProperty(category, selectedFilters);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>상품 필터</Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] max-h-[75vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{categoryName} 상품 필터</DialogTitle>
          <DialogDescription>원하는 옵션을 선택 후 적용하기 버튼을 눌러주세요.</DialogDescription>
        </DialogHeader>
        <FilterList property={filterData.data} />
        <DialogFooter>
          <Button type="submit">적용하기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
