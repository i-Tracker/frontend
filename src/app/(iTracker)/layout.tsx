import { Header } from '@/shared/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-[1080px] mx-auto px-4 pb-16">
      <Header />
      {children}
    </div>
  );
}
