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

interface PriceChartProps {
  priceInfos: { date: string; currentPrice: number }[];
  allTimeHighPrice: number;
  allTimeLowPrice: number;
  averagePrice: number;
}

const PriceChart = ({ priceInfos, allTimeHighPrice, allTimeLowPrice, averagePrice }: PriceChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={priceInfos} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="currentPrice" stroke="#8884d8" activeDot={{ r: 8 }} dot={<CustomDot />} />
        {/* <ReferenceLine y={allTimeHighPrice} label="최고가" stroke="red" strokeDasharray="3 3" />
        <ReferenceLine y={allTimeLowPrice} label="최저가" stroke="green" strokeDasharray="3 3" />
        <ReferenceLine y={averagePrice} label="평균가" stroke="blue" strokeDasharray="3 3" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
