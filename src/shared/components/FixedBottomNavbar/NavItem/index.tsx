import Link from 'next/link';
import { Text } from '../../shadcn/Text';

interface NavItemProps {
  link: string;
  Icon: React.ReactElement;
  label: string;
}

export const NavItem = ({ link, Icon, label }: NavItemProps) => {
  return (
    <Link href={link} className="w-16 flex flex-col items-center justify-center gap-1 cursor-pointer">
      {Icon}
      <Text typography="small">{label}</Text>
    </Link>
  );
};
