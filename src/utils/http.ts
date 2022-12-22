import axios from "axios";

import apiConfig from "../api/apiConfig";
import { clearToken, getToken } from "./token";

const http = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: apiConfig.timeOut,
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
http.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 403) {
      clearToken();
    }
    return Promise.reject(error);
  }
);
