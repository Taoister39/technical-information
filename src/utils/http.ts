import axios from "axios";

import apiConfig from "../api";

const http = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: apiConfig.timeOut,
});

http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
http.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);
