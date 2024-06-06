import { Text } from '@/shared/components/shadcn/Text';
import LineChart from '../LineChart';
import { API_BASE_URL } from '@/shared/api/constants';
import { GetProductDetailResponse } from '../../api/getProductDetail';
import Image from 'next/image';
import { FixedBottomButton } from '@/shared/components/FixedBottomButton';
import { convertToLocalFormat } from '@/shared/utils';
import { Badge } from '@/shared/components/Badge';
import { Separator } from '@/shared/components/shadcn/ui/separator';
import DiscountBadge from '@/shared/components/DiscountBadge';

// server component

export const ProductDetail = async ({ productId }: { productId: number }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/macbook_pro/${productId}`);
    if (!response.ok) {
      throw new Error(`서버에서 데이터를 가져오는 데 실패했습니다. 상태 코드: ${response.status}`);
    }

    const data = (await response.json()) as GetProductDetailResponse;

    return (
      <div className="my-8">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center gap-4">
          <div className="flex items-center">
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={120}
              height={120}
              className="object-contain md:min-w-[300px] h-auto"
            />

            <div>
              <div>
                <Badge label={data.label} />
                <Text typography="h4">{data.category}</Text>
                <Text>{data.title}</Text>
              </div>

              <div className="flex items-center justify-center bg-slate-950 rounded-md w-[35px] h-[35px] text-white my-2">
                <Text typography="xsmall" className="text-center">
                  {data.chip}
                </Text>
              </div>
              <div className="flex flex-col gap-1">
                <Text typography="small">{data.cpu}</Text>
                <Text typography="small">{data.gpu}</Text>
                <Text typography="small">{data.storage}</Text>
                <Text typography="small">{data.memory}</Text>
                <Text typography="small">{data.color}</Text>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-end justify-between">
              <div>
                <Text typography="p" className="text-gray-500">
                  현재가
                </Text>
                <Text typography="h4" className="leading-none">
                  {convertToLocalFormat(Math.floor(data.allTimeHighPrice))}원
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <Text typography="small" className="pt-1">
                  전체 평균가 대비
                </Text>
                <DiscountBadge discountPercentage={data.discountPercentage} />
              </div>
            </div>

            <div className="flex h-10 items-center space-x-4 my-4">
              <div>
                <Text typography="small" className="text-gray-500">
                  최저가
                </Text>
                <Text className="leading-none font-bold text-[#F45151]">
                  {convertToLocalFormat(Math.floor(data.allTimeLowPrice))}원
                </Text>
              </div>
              <Separator orientation="vertical" />
              <div>
                <Text typography="small" className="text-gray-500">
                  평균가
                </Text>
                <Text className="leading-none font-bold">{convertToLocalFormat(Math.floor(data.averagePrice))}원</Text>
              </div>
              <Separator orientation="vertical" />
              <div>
                <Text typography="small" className="text-gray-500">
                  최고가
                </Text>
                <Text className="leading-none font-bold text-[#519CF4]">
                  {convertToLocalFormat(Math.floor(data.allTimeHighPrice))}원
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text typography="h3" className="mt-12">
          그래프
        </Text>
        {data.priceInfos && <LineChart priceInfos={data.priceInfos} />}
        <FixedBottomButton title="🚀 구매하러가기" link={data.coupangUrl} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <Text>제품 정보를 불러오는 중 오류가 발생했습니다.</Text>;
  }
};
