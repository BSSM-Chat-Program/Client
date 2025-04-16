import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../api/auth';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const data = await getMyProfile();
      setUser(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
