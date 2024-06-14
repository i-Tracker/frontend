import { Text } from '@/shared/components/shadcn/Text';
import { API_BASE_URL } from '@/shared/api/constants';
import { GetProductDetailResponse } from '../../api/getProductDetail';
import Image from 'next/image';
import { FixedBottomButton } from '@/shared/components/FixedBottomButton';
import { convertToLocalFormat } from '@/shared/utils';
import { Badge } from '@/shared/components/Badge';
import { Separator } from '@/shared/components/shadcn/ui/separator';
import DiscountBadge from '@/shared/components/DiscountBadge';
import { Suspense } from 'react';
import PriceChart from '../LineChart';
import { CategoryType } from '@/features/category/constants';

// server component

export const ProductDetail = async ({ productId, category }: { productId: number; category: CategoryType }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/${category}/${productId}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`서버에서 데이터를 가져오는 데 실패했습니다. 상태 코드: ${response.status}`);
    }

    const data = (await response.json()) as GetProductDetailResponse;

    const isMacbook = category === 'macbook_air' || category === 'macbook_pro';

    return (
      <div>
        <div className="mb-8 w-full">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-12 md:gap-16">
            <div className="flex items-center md:flex-col md:items-start gap-12 md:gap-4">
              <div className="w-auto h-full rounded-md border-gray-200 border">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto p-4"
                />
              </div>

              <div className="w-full">
                <div>
                  {data.label === true ? (
                    <Badge label={'역대 최저가'} />
                  ) : (
                    <div className="inline-flex py-1 px-2 mt-4 mb-2"></div>
                  )}
                  <Text typography="h4">{data.category}</Text>
                  <Text>{data.title}</Text>
                </div>

                {isMacbook ? (
                  <>
                    <div className="flex items-center justify-center bg-slate-950 rounded-md w-[35px] h-[35px] text-white my-2 mt-6">
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
                  </>
                ) : (
                  <Text typography="small">{data.color}</Text>
                )}
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Text typography="small" className="pt-1">
                    전체 평균가 대비
                  </Text>
                  <DiscountBadge discountPercentage={data.discountPercentage} />
                </div>
                <div>
                  <Text typography="p" className="text-gray-500">
                    현재가
                  </Text>
                  <Text typography="h4" className="leading-none">
                    {convertToLocalFormat(Math.floor(data.currentPrice))}원
                  </Text>
                </div>
              </div>

              <div className="flex h-10 justify-between items-center md:justify-start md:space-x-16 my-8">
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
                  <Text className="leading-none font-bold">
                    {convertToLocalFormat(Math.floor(data.averagePrice))}원
                  </Text>
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
              <Suspense>
                <div className="max-w-[780px] h-[200px] my-10 mx-auto md:mx-0">
                  <PriceChart
                    priceInfos={data.priceInfos}
                    averagePrice={data.averagePrice}
                    allTimeHighPrice={data.allTimeHighPrice}
                    allTimeLowPrice={data.allTimeLowPrice}
                  />
                </div>
              </Suspense>
            </div>
          </div>
          <div className="mt-12 mb-24">
            <Text typography="small" className="text-[12px] block text-center md:text-end">
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </Text>
            <Text className="text-[10px] block text-center md:text-end">
              * 쿠팡 정보와 동일하지 않을 수 있으니 쿠팡에서 가격을 직접 확인 후 이용바랍니다.
            </Text>
          </div>
        </div>
        <FixedBottomButton title="🚀 구매하러가기" link={data.coupangUrl} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <Text>제품 정보를 불러오는 중 오류가 발생했습니다.</Text>;
  }
};
