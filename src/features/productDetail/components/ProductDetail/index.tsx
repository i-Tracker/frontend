import { Text } from '@/shared/components/shadcn/Text';
import LineChart from '../LineChart';
import { API_BASE_URL } from '@/shared/api/constants';
import { GetProductDetailResponse } from '../../api/getProductDetail';

// server component

export const ProductDetail = async ({ productId }: { productId: number }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/products/macbook_pro/${productId}`);
    if (!response.ok) {
      throw new Error(`서버에서 데이터를 가져오는 데 실패했습니다. 상태 코드: ${response.status}`);
    }

    const data = (await response.json()) as GetProductDetailResponse;

    return (
      <div>
        <div>
          <Text>{data?.category}</Text>
          <Text>{data?.title}</Text>
          <Text>평균가: {data?.averagePrice}</Text>
          <Text>최고가: {data?.allTimeHighPrice}</Text>
          <Text>최저가: {data?.allTimeLowPrice}</Text>
        </div>
        <Text typography="h3" className="mt-12">
          그래프
        </Text>
        {data?.priceInfos && <LineChart priceInfos={data.priceInfos} />}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <Text>제품 정보를 불러오는 중 오류가 발생했습니다.</Text>;
  }
};
