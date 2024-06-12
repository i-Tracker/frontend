'use client';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, Legend } from 'recharts';

interface PriceChartProps {
  priceInfos: { date: string; currentPrice: number }[];
}

const PriceChart = ({ priceInfos }: PriceChartProps) => {
  return (
    <div className="w-[100%] h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={priceInfos} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="currentPrice" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
