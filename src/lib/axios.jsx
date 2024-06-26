import Axios from "axios";
import storage from "../utils/storage";

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token?.token) {
    config.headers.authorization = `${token?.token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: "https://sbbl-backend-8.onrender.com",
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
