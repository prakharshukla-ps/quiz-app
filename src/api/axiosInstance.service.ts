import axios from "axios";
import { handleAxiosError } from "./axiosError.service";

const axiosInstance = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		return handleAxiosError(error);
	}
);

export default axiosInstance;
