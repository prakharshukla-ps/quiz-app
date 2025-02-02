import { Button, Flex, Rating, Text } from "@mantine/core";

const Finish = ({
	result,
	totalMarks,
	setQuizStatus,
	setQuesCount,
	setSelectedOption,
	setResult,
}: {
	result: number;
	totalMarks: number;
	setQuizStatus: React.Dispatch<
		React.SetStateAction<"started" | "restart" | "finish">
	>;
	setQuesCount: React.Dispatch<React.SetStateAction<number>>;
	setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
	setResult: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const ratingValue = (result / totalMarks) * 5;

	return (
		<Flex direction="column" align="center">
			<Rating value={ratingValue} readOnly color="cyan" size="lg" mb="lg" />

			<Text size="1.3rem">
				You scored{" "}
				<span style={{ color: "#3c9091", fontSize: "1.4rem" }}>{result}</span>{" "}
				marks out of{" "}
				<span style={{ color: "#3c9091", fontSize: "1.4rem" }}>
					{totalMarks}
				</span>{" "}
				marks.
			</Text>

			<Button
				w="60%"
				color="#3c9091"
				variant="filled"
				radius="md"
				size="md"
				my="xl"
				onClick={() => {
					setQuizStatus("restart");
					setQuesCount(0);
					setSelectedOption(null);
					setResult(0);
				}}
			>
				Restart Quiz
			</Button>
		</Flex>
	);
};

export default Finish;
