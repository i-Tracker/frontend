import { API_BASE_URL } from '@/shared/api/constants';

export const GET = async () => {
  const res = await fetch(`${API_BASE_URL}/category`);
  const data = await res.json();

  return Response.json({ data });
};
