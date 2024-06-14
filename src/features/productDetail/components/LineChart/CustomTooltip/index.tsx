/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { convertToLocalFormat } from '@/shared/utils';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import '@/shared/styles/style.css';

export const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="tooltip-bg p-4">
        <p className="label">{label}</p>
        <p className="label text-badge font-bold">{`해당일 가격: ${payload && payload.length > 0 ? `${convertToLocalFormat(payload[0].value as number)}원` : '데이터 없음'}`}</p>
      </div>
    );
  }

  return null;
};
