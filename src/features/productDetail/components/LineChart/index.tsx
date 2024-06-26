'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { CustomDot } from './CustomDot';
import { convertToLocalFormat } from '@/shared/utils';

interface PriceChartProps {
  priceInfos: { date: string; currentPrice: number }[];
  allTimeHighPrice: number;
  allTimeLowPrice: number;
  averagePrice: number;
}

const PriceChart = ({ priceInfos, allTimeHighPrice, allTimeLowPrice, averagePrice }: PriceChartProps) => {
  const formatYAxis = (yTick: number) => {
    return `${convertToLocalFormat(yTick)}`;
  };

  const formatXAxis = (xTick: string) => {
    return `${xTick.substring(5, 7)}월 ${xTick.substring(8, 10)}일`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={priceInfos} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="date" tickFormatter={formatXAxis} />
        <YAxis domain={['dataMin', 'dataMax']} padding={{ top: 24, bottom: 24 }} tickFormatter={formatYAxis} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="stepBefore"
          dataKey="currentPrice"
          stroke="#333333"
          strokeWidth={2}
          name="현재가"
          activeDot={{ r: 8 }}
          dot={<CustomDot />}
        />
        <ReferenceLine y={allTimeHighPrice} label="최고가" stroke="#519cf4" strokeDasharray="3 3" />
        <ReferenceLine y={averagePrice} label="평균가" stroke="#333333" strokeDasharray="3 3" />
        <ReferenceLine y={allTimeLowPrice} label="최저가" stroke="#ef6253" strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
