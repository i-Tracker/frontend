import Link from 'next/link';
import { Button } from '../shadcn/ui/button';

interface FixedBottomButtonProps {
  title: string;
  link: string;
}

export const FixedBottomButton = ({ title, link }: FixedBottomButtonProps) => {
  return (
    <div className="w-full flex items-center">
      {link ? (
        <Link href={link} target="_blank">
          <Button size="lg" className="w-full fixed bottom-0 left-0 right-0 rounded-none py-6">
            {title}
          </Button>
        </Link>
      ) : (
        <Button size="lg" disabled={true} className="w-full fixed bottom-0 left-0 right-0 rounded-none py-6">
          상품 URL이 존재하지 않습니다.
        </Button>
      )}
    </div>
  );
};