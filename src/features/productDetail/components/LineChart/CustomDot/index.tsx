import { DotProps } from 'recharts';

export const CustomDot = ({ cx, cy }: DotProps) => {
  if (cx && cy) {
    return (
      <svg x={cx - 6} y={cy - 6} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z" />
      </svg>
    );
  }
};
