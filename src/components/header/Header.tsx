import { Text } from "@mantine/core";

const Header = ({ data }: { data: IQuiz | undefined }) => {
	return (
		<>
			<Text size="2rem" fw={500} tt="uppercase" m="xl">
				{data?.title} Quiz App
			</Text>
		</>
	);
};

export default Header;
