import { Flex, Progress, Text } from "@mantine/core";
import Timer from "../timer/Timer";

const TopContainer = ({
	data,
	quesCount,
	result,
	setQuizStatus,
}: {
	data: IQuiz | undefined;
	quesCount: number;
	result: number;
	setQuizStatus: React.Dispatch<
		React.SetStateAction<"started" | "restart" | "finish">
	>;
}) => {
	const questions = data?.questions || [];
	const totalQuestions = questions.length;
	const progressValue =
		totalQuestions > 0 ? ((quesCount + 1) / totalQuestions) * 100 : 0;
	const totalMarks = totalQuestions * Number(data?.correct_answer_marks);

	return (
		<Flex direction="column" align="center" w="50%">
			<Progress.Root size="1rem" w="80%" mt="3rem" mb="md" radius="md">
				<Progress.Section
					value={progressValue}
					color="#3c9091"
				></Progress.Section>
			</Progress.Root>

			<Flex align="center" gap={80} my="xl">
				<Text
					bg="#3c9091"
					px="md"
					py="xs"
					c="white"
					style={{ borderRadius: 10 }}
				>
					Question : <strong>{quesCount + 1}</strong> / {totalQuestions}
				</Text>
				<Text
					bg="#3c9091"
					px="md"
					py="xs"
					c="white"
					style={{ borderRadius: 10 }}
				>
					<Timer duration={data?.duration} setQuizStatus={setQuizStatus} />
				</Text>
				<Text
					bg="#3c9091"
					px="md"
					py="xs"
					c="white"
					style={{ borderRadius: 10 }}
				>
					Score : <strong>{result}</strong> / {totalMarks}
				</Text>
			</Flex>
		</Flex>
	);
};

export default TopContainer;
