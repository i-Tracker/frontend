'use client';

import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { Text } from '@/shared/components/shadcn/Text';
import 'chart.js/auto';
import { setupChart } from '@/shared/utils/chartSetup';
import { useEffect } from 'react';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

interface LineChartProps {
  priceInfos: { date: string; currentPrice: number }[];
  maxPrice: number;
  minPrice: number;
  averagePrice: number;
}

const LineChart = ({ priceInfos, maxPrice, minPrice, averagePrice }: LineChartProps) => {
  useEffect(() => {
    setupChart();
  }, []);

  const options = {
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: averagePrice,
            yMax: averagePrice,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          },
          label1: {
            type: 'line',
            yMin: maxPrice,
            yMax: maxPrice,
            borderColor: '#519CF4',
            borderWidth: 2,
          },
          label2: {
            type: 'line',
            yMin: minPrice,
            yMax: minPrice,
            borderColor: '#F45151',
            borderWidth: 2,
          },
        },
      },
    },
  };

  const data = {
    labels: priceInfos.map((info) => info.date),
    datasets: [
      {
        label: '날짜별 금액',
        data: priceInfos.map((info) => info.currentPrice),
        fill: false,
        borderColor: 'rgb(236, 103, 73)',
        tension: 0.1,
        stepped: false,
      },
    ],
  };

  return (
    <div className="w-full max-h-[360px] h-auto my-12">
      <Text typography="h4">가격 변동 추이</Text>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
