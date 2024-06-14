import { Text } from '../shadcn/Text';

export const Badge = ({ label }: { label: string }) => {
  return (
    <div className="rounded-md bg-badge inline-flex py-1 px-2 mt-2 mb-2">
      <Text typography="xsmall" className="text-white">
        {label}
      </Text>
    </div>
  );
};
