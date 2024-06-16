import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '@/shared/components/QueryProvider';
import { MSWProvider } from '@/shared/components/MSWProvider';
import GoogleAnalytics from '@/shared/components/GoogleAnalytics';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'iTracker',
  description: '애플 제품에 대한 쿠팡 가격 변동 정보를 제공합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    console.log('need GA ID');
  }

  return (
    <html lang="ko">
      <body className={roboto.className}>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics />}
        <MSWProvider>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
