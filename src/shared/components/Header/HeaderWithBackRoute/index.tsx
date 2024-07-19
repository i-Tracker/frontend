import { ArrowBack } from '@/shared/assets/Icons';
import { useRouter, usePathname } from 'next/navigation';

const HeaderWithBackRoute = () => {
  const router = useRouter();
  const pathName = usePathname();

  const getProductCategory = () => {
    const parts = pathName.split('/');
    return parts.length > 2 ? parts[2] : '';
  };

  const goToBackPage = () => {
    router.push(`/category/${getProductCategory()}`);
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
