import { Text } from '../shadcn/Text';

const Footer = () => {
  return (
    <div className="h-full border-t p-6">
      <Text className="font-bold">iTracker</Text>
      <div className="flex flex-col gap-3 mt-4">
        <Text typography="xsmall" className="inline-block">
          상호명: 아이트래커
        </Text>
        <Text typography="xsmall" className="inline-block">
          대표자명: 김석호
        </Text>
        <Text typography="xsmall" className="inline-block">
          사업자등록번호: 665-02-03415
        </Text>
        <Text typography="xsmall" className="inline-block">
          문의: itracker2024@gmail.com
        </Text>
      </div>
    </div>
  );
};

export default Footer;
