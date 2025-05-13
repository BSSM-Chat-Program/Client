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
        await customAxios.get(`/oauth2/login/google/${code}`);
        const res = await customAxios.get('/authority/check');
        setUser(res.data);
        navigate('/dm');
      } catch (e) {
        console.error('로그인 실패', e);
        navigate('/');
      }
    };

    fetchUser();
  }, []);

  return <div>로그인 처리 중...</div>;
}