import { Text } from '../shadcn/Text';

export const Badge = ({ label }: { label: string }) => {
  return (
    <div className="rounded-md bg-badge inline-block px-2 my-2">
      <Text typography="small" className="text-white">
        {label}
      </Text>
    </div>
  );
};
