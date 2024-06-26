import { ArrowBack } from '@/shared/assets/Icons';
import { useRouter } from 'next/navigation';

const HeaderWithBackRoute = () => {
  const router = useRouter();

  const goToBackPage = () => {
    router.back();
  };

  return (
    <header className="w-full flex items-center">
      <nav className="w-[1080px] h-[70px] flex items-center justify-between mx-auto border-b">
        <button onClick={goToBackPage}>
          <ArrowBack width={24} height={24} />
        </button>
      </nav>
    </header>
  );
};

export default HeaderWithBackRoute;
