import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/mypage')) {
    // console.log(request.cookies.get('accessToken'));
    // return NextResponse.redirect(new URL(`/`, request.url));
  }
}

export const config = {
  matcher: '/mypage',
};
