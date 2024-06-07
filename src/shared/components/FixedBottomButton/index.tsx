import Link from 'next/link';
import { Button } from '../shadcn/ui/button';

interface FixedBottomButtonProps {
  title: string;
  link: string;
}

export const FixedBottomButton = ({ title, link }: FixedBottomButtonProps) => {
  return (
    <div className="w-full flex items-center">
      <Link href={link ?? ''} target="_blank">
        <Button size="lg" className="w-full fixed bottom-0 left-0 right-0 rounded-none py-6">
          {title}
        </Button>
      </Link>
    </div>
  );
};
