// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // For cookies
  // console.log(`API base URL: ${import.meta.env.VITE_API_URL || "http://localhost:3000"}` 
});



export default API;
