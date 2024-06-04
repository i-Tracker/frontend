import React from 'react';
import { Text } from '@/shared/components/shadcn/Text';
import { Triangle } from '@/shared/assets/Icons';

const DiscountBadge = ({ discountPercentage }: { discountPercentage: number }) => {
  const getBadgeContent = () => {
    switch (true) {
      case discountPercentage < 0:
        return (
          <div className="flex items-center justify-center bg-badgeBackground w-[55px] h-[20px] rounded gap-1 px-1">
            <Triangle color="#F45151" width={10} />
            <Text typography="xsmall" className="text-badge font-bold">
              {discountPercentage}%
            </Text>
          </div>
        );
      case discountPercentage > 0:
        return (
          <div className="flex items-center justify-center bg-[#EFF6FF] w-[55px] h-[20px] rounded gap-1 px-1">
            <Triangle color="#519CF4" width={10} className="rotate-180" />
            <Text typography="xsmall" className="text-[#519CF4] font-bold">
              +{discountPercentage}%
            </Text>
          </div>
        );

      case discountPercentage === 0:
        return (
          <div className="flex items-center justify-center bg-[#ECECEC] w-[55px] h-[20px] rounded gap-1 px-1">
            <Text className="text-gray-600 font-bold text-xs">변동없음</Text>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{getBadgeContent()}</>;
};

export default DiscountBadge;
