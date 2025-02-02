interface IQuiz {
	title: string;
	topic: string;
	duration: number;
	negative_marks: string;
	correct_answer_marks: string;
	questions: IQuestion[];
}

interface IQuestion {
	id: number;
	description: string;
	options: IOption[];
	detailed_solution: string;
}

interface IOption {
	id: string;
	description: string;
	question_id: number;
	is_correct: boolean;
}
