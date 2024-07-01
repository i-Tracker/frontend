import { DotProps } from 'recharts';

export const CustomDot = ({ cx, cy }: DotProps) => {
  if (cx && cy) {
    return (
      <svg x={cx - 9} y={cy - 9} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path fill="#EF6253" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8Z" />
      </svg>
    );
  }
};
