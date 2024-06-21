import { API_BASE_URL } from '@/shared/api/constants';
import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const referer = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : API_BASE_URL;

  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    const response = await axios.get(`${API_BASE_URL}/api/v1/oauth/login/kakao?code=${code}`, {
      headers: {
        Referer: referer,
      },
    });

    const jwt = response.headers?.['authorization'] as string | string[];

    return NextResponse.json({ accessToken: jwt });
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error('Error:', e.response);

      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
