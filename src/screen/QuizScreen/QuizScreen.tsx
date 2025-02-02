import { Center, Container, Flex, Loader } from "@mantine/core";
import Header from "src/components/header/Header";
import Question from "src/components/question/Question";
import StartScreen from "src/components/startScreen/StartScreen";
import TopContainer from "src/components/topContainer/TopContainer";
import useQuizScreen from "./useQuizScreen";

const QuizScreen = () => {
	const {
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
	} = useQuizScreen();

	return (
		<Container size="responsive" m="xl">
			{isLoading ? (
				<Center>
					<Loader color="cyan" size={80} type="dots" mt="40vh" />
				</Center>
			) : (
				<Flex direction="column" align="center">
					<Header data={data} />
					{quizStatus === "started" ? (
						<>
							<TopContainer
								data={data}
								quesCount={quesCount}
								result={result}
								setQuizStatus={setQuizStatus}
							/>

							<Question
								data={data}
								quesCount={quesCount}
								setQuesCount={setQuesCount}
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
								quizStatus={quizStatus}
								setQuizStatus={setQuizStatus}
								setResult={setResult}
							/>
						</>
					) : (
						<StartScreen
							data={data}
							quizStatus={quizStatus}
							setQuizStatus={setQuizStatus}
							result={result}
							setQuesCount={setQuesCount}
							setSelectedOption={setSelectedOption}
							setResult={setResult}
						/>
					)}
				</Flex>
			)}
		</Container>
	);
};

export default QuizScreen;
