import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

export default api;
