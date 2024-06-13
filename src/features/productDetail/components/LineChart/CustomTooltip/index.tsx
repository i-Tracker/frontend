/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { convertToLocalFormat } from '@/shared/utils';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

export const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`날짜: ${label}`}</p>
        <p className="label">{`해당일 가격: ${payload && payload.length > 0 ? convertToLocalFormat(payload[0].value as number) : '데이터 없음'}`}</p>
      </div>
    );
  }

  return null;
};
