import { Roboto } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '@/shared/components/QueryProvider';
import { MSWProvider } from '@/shared/components/MSWProvider';
import GoogleAnalytics from '@/shared/components/GoogleAnalytics';
import { getMetadata } from '@/shared/utils/metadata';
import { Toaster } from '@/shared/components/shadcn/ui/toaster';
import { UserStatusProvider } from '@/features/auth/context/userStatusContext';
import { Suspense } from 'react';
import NavigationEvents from '@/shared/components/PixelEvents';
import Image from 'next/image';
import { FB_PIXEL_ID } from '@/shared/utils/pixel';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = getMetadata();

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
      <head>
        <noscript>
          <Image
            alt="fb"
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body className={roboto.className}>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics />}

        <MSWProvider>
          <QueryProvider>
            <UserStatusProvider>{children}</UserStatusProvider>
          </QueryProvider>
        </MSWProvider>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>

        <Toaster />
      </body>
    </html>
  );
}
