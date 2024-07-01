import Link from 'next/link';
import { Button } from '../shadcn/ui/button';

interface FixedBottomButtonProps {
  title: string;
  link: string;
  bgColor?: string;
}

export const FixedBottomButton = ({ title, link, bgColor }: FixedBottomButtonProps) => {
  const bgColorStyles = bgColor ? `bg-[${bgColor}]` : '';

  return (
    <>
      {link ? (
        <Link href={link} target="_blank">
          <Button
            size="lg"
            className={`w-full fixed bottom-0 left-0 right-0 rounded-none py-6 ${bgColorStyles} hover:${bgColorStyles}`}
          >
            {title}
          </Button>
        </Link>
      ) : (
        <Button size="lg" disabled={true} className="w-full fixed bottom-0 left-0 right-0 rounded-none py-8">
          상품 URL이 존재하지 않습니다.
        </Button>
      )}
    </>
  );
};
