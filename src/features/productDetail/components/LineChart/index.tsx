'use client';

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = ({ priceInfos }: { priceInfos: { date: string; currentPrice: number }[] }) => {
  const data = {
    labels: priceInfos.map((info) => info.date),
    datasets: [
      {
        label: '가격 변동 추이',
        data: priceInfos.map((info) => info.currentPrice),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        stepped: true,
      },
    ],
  };

  return (
    <div className="w-full h-auto my-24">
      <h1>Example 1: Line Chart</h1>
      <Line data={data} />
    </div>
  );
};
export default LineChart;
