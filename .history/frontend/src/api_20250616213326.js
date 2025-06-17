import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 👈 ye hum .env se lenge
  withCredentials: true, // agar cookies use ho rahi ho to (auth ke liye)
});

export default API;
