import axios from "axios";

const API = axios.create({
  baseURL: "https://chatapp-no4t.onrender.com", // Replace if needed
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
