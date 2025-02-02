import axiosInstance from "./axiosInstance.service";

// Fetch quiz data
export const getQuizData = (): Promise<IQuiz> =>
	axiosInstance.get("/Uw5CrX").then((response) => response.data);
