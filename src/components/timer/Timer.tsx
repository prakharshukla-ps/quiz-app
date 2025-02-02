import { useEffect, useState } from "react";

const Timer = ({
	duration = 0,
	setQuizStatus,
}: {
	duration: number | undefined;
	setQuizStatus: React.Dispatch<
		React.SetStateAction<"started" | "restart" | "finish">
	>;
}) => {
	const [timeLeft, setTimeLeft] = useState(duration * 60);

	useEffect(() => {
		if (timeLeft === 0) {
			setQuizStatus("finish");
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	const formatTime = (seconds: number) => {
		const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
		const secs = String(seconds % 60).padStart(2, "0");
		return `${minutes}:${secs}`;
	};

	return <>⌛ {formatTime(timeLeft)}</>;
};

export default Timer;
