import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("verification_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const authAPI = {
  sendVerificationCode: (email: string) => {
    return apiClient.post("/v0/user/signup", { email });
  },
  verifyEmail: (token: string, code: string) => {
    return apiClient.put(`/v0/user/verify-email/${code}`, { token });
  },
};

export default {
  auth: authAPI,
};
