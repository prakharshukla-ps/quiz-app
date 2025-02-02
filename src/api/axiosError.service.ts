import { AxiosError } from "axios";

export const handleAxiosError = (error: AxiosError) => {
	if (error.response) {
		console.error("Response Error:", error.response.data);
	} else if (error.request) {
		console.error("No response received:", error.request);
	} else {
		console.error("Request error:", error.message);
	}

	throw error;
};
