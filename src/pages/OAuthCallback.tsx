import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import customAxios from '../lib/customAxios';
import { useAuthStore } from '../store/authStore';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const setUser = useAuthStore((s) => s.setUser);
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const loginRes = await customAxios.post<{ accessToken: string }>(`/oauth2/login/google/`, {
          code,
        });
        const { accessToken } = loginRes.data;

        localStorage.setItem('access_token', accessToken);

        customAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        const userRes = await customAxios.get('/authority/check');
        setUser(userRes.data);

        navigate('/dm');
      } catch (e) {
        console.error('로그인 실패', e);
        navigate('/');
      }
    };

    if (code) fetchUser();
    else navigate('/');
  }, [code, navigate, setUser]);

  return <div>로그인 처리 중...</div>;
}