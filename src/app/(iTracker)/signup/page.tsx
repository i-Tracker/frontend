import { Text } from '@/shared/components/shadcn/Text';
import Signup from '@/features/auth/components/signup';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="h-[310px] min-w-[250px] border py-8 px-8 flex flex-col items-center rounded-md">
        <Text typography="h3">아이트래커 회원가입</Text>
        <Signup />
      </div>
    </div>
  );
}
