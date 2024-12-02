import axios from 'axios';
import jwt from 'jsonwebtoken';
import Router from 'next/router';

const jwtInterceptor = axios.create({
  timeout: 7000,
  headers: { 'Content-Type': 'application/json' },
})


jwtInterceptor.interceptors.response.use(
  async (response) => {
    return response

    if (!accessToken) {
      // If no access token, proceed as normal
      return config;
    }

    // Try to verify the access token
    const user = verifyAccessToken(accessToken);

    if (user) {
      // If the access token is valid, include it in the request header
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    }

    if (refreshToken) {
      // If the access token is expired, attempt to refresh it using the refresh token
      const newAccessToken = await refreshAccessToken(refreshToken);

      if (newAccessToken) {
        // If the refresh was successful, save the new access token
        localStorage.setItem('accessToken', newAccessToken);

        // Retry the request with the new access token
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return config;
      }
    }

    // If both tokens are expired or missing, redirect to login
    Router.push('/login');
    return Promise.reject('Both tokens expired or missing');
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor (optional, for handling errors globally)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized errors
      Router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
