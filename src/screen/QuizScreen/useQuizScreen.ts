import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getQuizData } from "src/api/quiz";

// Function for fetching quiz data
const useQuizScreen = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["quizData"],
		queryFn: getQuizData,
	});

	const [quizStatus, setQuizStatus] = useState<
		"started" | "restart" | "finish"
	>("restart");
	const [quesCount, setQuesCount] = useState<number>(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [result, setResult] = useState<number>(0);

	return {
		data,
		isLoading,
		quizStatus,
		setQuizStatus,
		quesCount,
		setQuesCount,
		selectedOption,
		setSelectedOption,
		result,
		setResult,
	};
};

export default useQuizScreen;
