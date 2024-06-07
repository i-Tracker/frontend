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
}

const LineChart = ({ priceInfos }: LineChartProps) => {
  useEffect(() => {
    setupChart();
  }, []);

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
      <Line data={data} />
    </div>
  );
};
export default LineChart;
