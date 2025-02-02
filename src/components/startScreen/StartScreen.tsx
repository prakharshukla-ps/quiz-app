import { Button, Image, Text } from "@mantine/core";
import StudentImage from "src/assets/student.png";
import Finish from "../finish/Finish";

const StartScreen = ({
	data,
	quizStatus,
	setQuizStatus,
	result,
	setQuesCount,
	setSelectedOption,
	setResult,
}: {
	data: IQuiz | undefined;
	quizStatus: "started" | "restart" | "finish";
	setQuizStatus: React.Dispatch<
		React.SetStateAction<"started" | "restart" | "finish">
	>;
	result: number;
	setQuesCount: React.Dispatch<React.SetStateAction<number>>;
	setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
	setResult: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const questions = data?.questions || [];
	const totalQuestions = questions.length;
	const totalMarks = totalQuestions * Number(data?.correct_answer_marks);

	return (
		<>
			{quizStatus === "restart" && (
				<Text size="1.8rem" mt="3rem">
					Welcome to {data?.topic} Quiz!!
				</Text>
			)}
			<Image my="xl" w={200} src={StudentImage} />
			{quizStatus === "restart" && (
				<>
					<Text mb="xl" size="1.2rem" fw={600}>
						Want to challenge your skills ?
					</Text>
					<Button
						variant="filled"
						color="#3c9091"
						size="md"
						radius="md"
						w="13%"
						onClick={() => setQuizStatus("started")}
					>
						Let's Start
					</Button>
				</>
			)}

			{quizStatus === "finish" && (
				<Finish
					result={result}
					totalMarks={totalMarks}
					setQuizStatus={setQuizStatus}
					setQuesCount={setQuesCount}
					setSelectedOption={setSelectedOption}
					setResult={setResult}
				/>
			)}
		</>
	);
};

export default StartScreen;
