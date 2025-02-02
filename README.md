# Quiz App

A simple quiz application built using **React** and **TypeScript** with state management using **React Query** and a beautiful UI powered by **Mantine**.

## Features

- Dynamic quiz with multiple questions and options
- Timer functionality to track quiz time
- Score calculation with correct and incorrect answer handling
- Navigation between questions with **Next** and **Finish** buttons
- UI with Mantine components

## Tech Stack

- **React** - Library for building the UI
- **TypeScript** - Ensures type safety
- **Axios** - Used for API requests
- **React Query** - Efficient data fetching and caching
- **Mantine** - UI components for styling

## Components

### 1. **Header Component**

- Displays the title of the quiz.

### 2. **Start Screen & Finish Component**

- Start screen allows users to begin the quiz.
- Finish screen shows the final score and provides an option to restart.

### 3. **Question Component**

- Displays a question with multiple answer options.
- Highlights correct and incorrect answers.
- Includes **Next** and **Finish** buttons for navigation.

### 4. **Top Container Component**

- Displays the **Timer**, **Question Count**, and **Score**.

### 5. **Timer Component**

- Countdown timer to track quiz duration.
- Automatically ends the quiz when time runs out.

## Screenshots

### Start Screen

![Start Screen](https://i.ibb.co/Y7MQRtXq/start-screen.png)

### Question Component

![Question Component](https://i.ibb.co/pjFNT8xv/question-component.png)

### Correct Answer Highlight

![Correct Answer](https://i.ibb.co/5Ws7xTYk/correct-answer.png)

### Incorrect Answer Highlight

![Incorrect Answer](https://i.ibb.co/tpPjMYdS/incorrect-answer.png)

### Finish Screen

![Finish Screen](https://i.ibb.co/DHpnK5wj/finish-screen.png)

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/prakharshukla-ps/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```

### Running the App

Start the development server:

```sh
yarn start
```
