// Configure all API calls with credentials
const api = axios.create({
  baseURL: 'https://chatapp-no4t.onrender.com/api',
  withCredentials: true, // This is crucial
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for token fallback
api.interceptors.request.use(config => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});