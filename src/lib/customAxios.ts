import axios from 'axios';

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키 포함
});

// 1) 요청 전 interceptor: localStorage 에서 토큰 꺼내서 헤더에 추가
customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2) 응답 interceptor (기존)
customAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      window.location.href = '/'; // 세션 만료 시
    }
    return Promise.reject(err);
  }
);

export default customAxios;