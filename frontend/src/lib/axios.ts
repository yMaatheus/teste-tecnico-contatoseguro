import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: VITE_BACKEND_URL,
});

export default api;
