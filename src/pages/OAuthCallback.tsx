// src/pages/OAuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customAxios from '@/lib/customAxios';
import { useAuthStore } from '@/store/authStore';

export default function OAuthCallback() {
  const setUser = useAuthStore((s) => s.setUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await customAxios.get('/users/me');
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