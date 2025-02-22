import { message } from "antd";
import axios from "axios";

const baseUrl = "http://localhost:8000";

const authUrl = {
  login: baseUrl + "/auth/login",
  register: baseUrl + "/auth/register",
  forgotPassword: baseUrl + "/auth/forgot-password",
  getProfile: baseUrl + "/auth/get-profile",
};

const authAPI = {
  login: async (data) => {
    try {
      const response = await axios.post(authUrl.login, data);

      localStorage.setItem("accessTokenApplicant", response.data.data.accessToken);
      localStorage.setItem("refreshTokenApplicant", response.data.data.refreshToken);

      // lưu lại access token vào header mặc định của axios
      axios.defaults.headers["Authorization"] = "Bearer " + response.data.data.accessToken;

      return {
        isSuccess: true,
        message: "OK",
        data: response.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: error.response.data.message,
      };
    }
  },

  getProfile: async () => {
    try {
      const response = await axios.get(authUrl.getProfile);
      return {
        isSuccess: true,
        message: "OK",
        data: response.data.data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: error.response.data.message,
      };
    }
  },
};

export default authAPI;
