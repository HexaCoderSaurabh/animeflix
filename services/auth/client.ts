import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Router from 'next/router';

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const authClient = axios.create({
  baseURL: process.env.AUTH_WS_URL || 'http://localhost:4001', // Base URL for auth-ws
  timeout: 70000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshTokenClient = axios.create({
  baseURL: process.env.AUTH_WS_URL || 'http://localhost:4001', // Base URL for auth-ws
  timeout: 70000,
  headers: {
    'Content-Type': 'application/json',
  },
});

authClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      debugger
      await refreshTokenClient.post('/auth/refresh', {}, { withCredentials: true }).catch((refreshTokenError) => {
        Router.push('/login');
        return Promise.reject(refreshTokenError)
      })

      return axios(error.config)
    }
    return Promise.reject(error);
  }
);

export default authClient;
