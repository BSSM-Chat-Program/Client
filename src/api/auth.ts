import customAxios from '../lib/customAxios';

export const getMyProfile = async () => {
  const res = await customAxios.get('/users/me');
  return res.data;
};
