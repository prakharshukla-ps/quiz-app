import { Button, Flex, Text } from "@mantine/core";

const Question = ({
	data,
	quesCount,
	setQuesCount,
	selectedOption,
	setSelectedOption,
	quizStatus,
	setQuizStatus,
	setResult,
}: {
	data: IQuiz | undefined;
	quesCount: number;
	setQuesCount: React.Dispatch<React.SetStateAction<number>>;
	selectedOption: number | null;
	setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
	quizStatus: "started" | "restart" | "finish";
	setQuizStatus: React.Dispatch<
		React.SetStateAction<"started" | "restart" | "finish">
	>;
	setResult: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const questions = data?.questions || [];
	const isLastQuestion = quesCount === questions.length - 1;
	const correctAnswerMarks = Number(data?.correct_answer_marks) || 0;
	const negativeMarks = Number(data?.negative_marks) || 0;

	const handleOptionClick = (index: number, isCorrect: boolean) => {
		setSelectedOption(index);

		setResult((prev) => {
			if (isCorrect) {
				return prev + correctAnswerMarks;
			}
			return prev - negativeMarks;
		});
	};

	return (
		<Flex direction="column" align="center" w="40%">
			<Text my="md">{questions?.[quesCount]?.description}</Text>

			{questions?.[quesCount]?.options?.map((option, index) => (
				<Button
					color={
						selectedOption === index
							? option.is_correct
								? "green"
								: "red"
							: "gray"
					}
					w="100%"
					variant="filled"
					radius="md"
					mt="lg"
					size="md"
					key={option?.id}
					style={{
						pointerEvents: selectedOption !== null ? "none" : "auto",
					}}
					onClick={() => handleOptionClick(index, option.is_correct)}
				>
					{option?.description}
				</Button>
			))}

			{selectedOption !== null && (
				<Button mt="xl" color="lime" size="md" radius="lg">
					Correct Answer:{" "}
					{questions[quesCount]?.options?.find((option) => option?.is_correct)
						?.description || "No correct answer found"}
				</Button>
			)}

			<Flex
				my="3rem"
				w="100%"
				justify={isLastQuestion ? "center" : "space-between"}
			>
				{quesCount >= 0 && (
					<Button
						w="40%"
						color="#3c9091"
						variant="filled"
						radius="md"
						size="md"
						onClick={() => setQuizStatus("finish")}
					>
						Finish
					</Button>
				)}

				{!isLastQuestion && quizStatus === "started" && (
					<Button
						w="40%"
						color="#3c9091"
						variant="filled"
						radius="md"
						size="md"
						onClick={() => {
							setQuesCount((prev) => prev + 1);
							setSelectedOption(null);
						}}
					>
						Next
					</Button>
				)}
			</Flex>
		</Flex>
	);
};

export default Question;
