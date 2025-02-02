import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import QuizScreen from "./screen/QuizScreen/QuizScreen";

function App() {
	return (
		<MantineProvider>
			<QuizScreen />
		</MantineProvider>
	);
}

export default App;
