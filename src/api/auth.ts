import customAxios from '../lib/customAxios';

export const getMyProfile = async () => {
  const res = await customAxios.get('/authority/check');
  return res.data;
};
