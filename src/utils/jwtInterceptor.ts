import axios from "axios";

export function jwtInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        // config.headers = config.headers ?? {};
        // config.withCredentials = true;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
