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
import { useEffect, useState } from 'react';
import { FilterProperty, filterKeyMap } from '../../api/getFilterProperty';
import { useGetProperty } from '../../hooks/useFilterProperty';
import { useGetInitialProperty } from '../../hooks/useInitialProperty';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/shadcn/ui/toggle-group';
import { Text } from '@/shared/components/shadcn/Text';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';

export const Filter = ({ title, category, variant }: { title: string; category: CategoryType; variant: boolean }) => {
  const categoryName = categoryMap[category];
  const [open, setOpen] = useState(false);

  const [initialFilters, setInitialFilters] = useState<FilterProperty>({});
  const [selectedFilters, setSelectedFilters] = useState<FilterProperty>({});
  const { data: filterData, isError } = useGetProperty(category, selectedFilters);
  const { data: initialData, isLoading } = useGetInitialProperty(category);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && initialData) {
      setInitialFilters(initialData.data);
    }
  }, [initialData, isLoading]);

  if (isError) {
    return <div>제품정보를 받아오지 못했습니다.</div>;
  }

  const initializeProperty = () => {
    if (initialData) {
      setSelectedFilters({});
    }
  };

  const handleClickProperty = (propertyName: keyof FilterProperty, property: string | number) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[propertyName] || [];

      if (!currentValues.includes(property)) {
        return { ...prev, [propertyName]: [...currentValues, property] };
      } else {
        return {};
      }
    });
  };

  const handleSubmitProperty = () => {
    const queryParams = queryString.stringify(selectedFilters, { arrayFormat: 'comma' });
    setOpen(false);
    router.push(`/category/${category}/search?${queryParams}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="my-4" variant={variant ? 'outline' : 'default'}>
          <Text typography="xsmall" className="md:text-sm">
            {title}
          </Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{categoryName} 상품 필터</DialogTitle>
          <DialogDescription>원하는 옵션을 선택 후 적용하기 버튼을 눌러주세요.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-start">
          {Object.entries(initialFilters).map(([property, values]) => (
            <div key={property}>
              <Label className="pl-1">
                <Text typography="p" className="font-bold">
                  {filterKeyMap[property as keyof typeof filterKeyMap]}
                </Text>
              </Label>
              <ToggleGroup variant="outline" type="single" className="flex flex-wrap justify-start">
                {values.map((value) => (
                  <ToggleGroupItem
                    disabled={!filterData?.data[property as keyof FilterProperty]?.includes(value)}
                    key={value}
                    value={`${value}`}
                    aria-label={property}
                    onClick={() => handleClickProperty(property as keyof FilterProperty, value)}
                    isChecked={selectedFilters[property as keyof FilterProperty]?.includes(value) || false}
                  >
                    <Text typography="small">{property === 'size' ? `${value}인치` : value}</Text>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          ))}
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={initializeProperty}>
            필터 초기화
          </Button>
          <Button type="submit" onClick={handleSubmitProperty}>
            적용하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
