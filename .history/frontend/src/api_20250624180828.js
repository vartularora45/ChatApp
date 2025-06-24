import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // For sending cookies
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

// Add request interceptor for JWT fallback
API.interceptors.request.use((config) => {
  // Get token from localStorage as fallback
  const token = localStorage.getItem("jwt");
  
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      // Your token refresh or logout logic here
      console.error("Authentication error", error);
      
      // Example: Redirect to login
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    
    return Promise.reject(error);
  }
);

export default API;