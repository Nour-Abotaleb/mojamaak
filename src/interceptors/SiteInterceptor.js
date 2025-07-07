
import axios from 'axios';

const siteApi = axios.create({
  baseURL: 'https://api.mojamaak.com',
  headers: {
    'Cache-Control': 'no-cache',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'User-Agent': 'PostmanRuntime/7.44.1',
    'accept-language': 'ar',
    // 'Authorization': `Bearer ${token}`,
  },
});

// Automatically attach token
siteApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["lang"] = localStorage.getItem("lang");
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle errors globally
siteApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default siteApi;
