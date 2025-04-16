import axios from 'axios';

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키 포함
});

customAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // 세션 만료 시 로그아웃 처리
      window.location.href = '/';
    }
    return Promise.reject(err);
  }
);

export default customAxios;
