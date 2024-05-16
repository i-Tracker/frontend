import { Header } from '@/shared/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Header />
      {children}
    </div>
  );
}
