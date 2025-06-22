// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // For cookies
  // console.log(`API base URL: ${import.meta.env.VITE_API_URL || "http://localhost:3000"}` 
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ✅ Attach token here
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
