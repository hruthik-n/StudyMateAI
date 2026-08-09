import "./Quiz.css";
import { useState } from "react";

const quizData = {
  "Machine Learning": [
    {
      question: "What is Machine Learning?",
      options: [
        "A type of computer hardware",
        "A method that allows computers to learn from data",
        "A programming language",
        "A database system",
      ],
      answer: 1,
    },
    {
      question: "Which is a type of Machine Learning?",
      options: [
        "Supervised Learning",
        "HTML Learning",
        "Network Learning",
        "Browser Learning",
      ],
      answer: 0,
    },
    {
      question: "Which algorithm is used for classification?",
      options: [
        "Linear Regression",
        "Decision Tree",
        "HTML",
        "CSS",
      ],
      answer: 1,
    },
    {
      question: "What is training data used for?",
      options: [
        "Deleting a model",
        "Teaching a machine learning model",
        "Creating websites",
        "Installing software",
      ],
      answer: 1,
    },
    {
      question: "What does AI stand for?",
      options: [
        "Automatic Internet",
        "Artificial Intelligence",
        "Advanced Input",
        "Artificial Internet",
      ],
      answer: 1,
    },
  ],

  "Full Stack Development": [
    {
      question: "What is React mainly used for?",
      options: [
        "Building user interfaces",
        "Managing databases",
        "Creating operating systems",
        "Computer networking",
      ],
      answer: 0,
    },
    {
      question: "What does JSX allow us to write?",
      options: [
        "SQL inside Java",
        "HTML-like code inside JavaScript",
        "Python inside CSS",
        "MongoDB inside HTML",
      ],
      answer: 1,
    },
    {
      question: "Which hook is used to manage state in React?",
      options: [
        "useState",
        "useHTML",
        "useCSS",
        "useMongo",
      ],
      answer: 0,
    },
    {
      question: "Which technology is used for styling web pages?",
      options: [
        "MongoDB",
        "Node.js",
        "CSS",
        "Express",
      ],
      answer: 2,
    },
    {
      question: "What is Node.js?",
      options: [
        "A database",
        "A JavaScript runtime",
        "A CSS framework",
        "An HTML tag",
      ],
      answer: 1,
    },
  ],

  "Internet of Things": [
    {
      question: "What does IoT stand for?",
      options: [
        "Internet of Technology",
        "Internet of Things",
        "Integration of Things",
        "Intelligence of Technology",
      ],
      answer: 1,
    },
    {
      question: "Which device can be part of IoT?",
      options: [
        "Smartwatch",
        "Notebook paper",
        "Pencil",
        "Normal book",
      ],
      answer: 0,
    },
    {
      question: "What is a sensor used for in IoT?",
      options: [
        "Collecting data",
        "Writing programs",
        "Creating websites",
        "Printing documents",
      ],
      answer: 0,
    },
    {
      question: "Which is commonly used to connect IoT devices?",
      options: [
        "Wi-Fi",
        "Paper",
        "Keyboard",
        "Printer ink",
      ],
      answer: 0,
    },
    {
      question: "IoT devices commonly send data to what?",
      options: [
        "Cloud platforms",
        "Paper files",
        "DVD only",
        "Keyboard",
      ],
      answer: 0,
    },
  ],

  "Data Structures": [
    {
      question: "Which data structure follows LIFO?",
      options: [
        "Queue",
        "Stack",
        "Tree",
        "Graph",
      ],
      answer: 1,
    },
    {
      question: "Which data structure follows FIFO?",
      options: [
        "Stack",
        "Queue",
        "Tree",
        "Graph",
      ],
      answer: 1,
    },
    {
      question: "Which structure stores elements using indexes?",
      options: [
        "Array",
        "Graph",
        "Tree",
        "Stack only",
      ],
      answer: 0,
    },
    {
      question: "What does LIFO mean?",
      options: [
        "Last In First Out",
        "Last In Final Order",
        "List In First Out",
        "Long Input First Output",
      ],
      answer: 0,
    },
    {
      question: "A tree is an example of which type of structure?",
      options: [
        "Linear",
        "Non-linear",
        "Primitive",
        "Character",
      ],
      answer: 1,
    },
  ],
};

function Quiz() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const startQuiz = (subject) => {
    setSelectedSubject(subject);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }

    const questions = quizData[selectedSubject];

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    startQuiz(selectedSubject);
  };

  const backToSubjects = () => {
    setSelectedSubject("");
    setQuizStarted(false);
    setFinished(false);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const subjects = [
    {
      name: "Machine Learning",
      icon: "🤖",
      description: "AI, algorithms and learning models",
    },
    {
      name: "Full Stack Development",
      icon: "💻",
      description: "React, JavaScript and web development",
    },
    {
      name: "Internet of Things",
      icon: "🌐",
      description: "IoT devices, sensors and networks",
    },
    {
      name: "Data Structures",
      icon: "📚",
      description: "Arrays, stacks, queues and trees",
    },
  ];

  // SUBJECT SELECTION
  if (!quizStarted) {
    return (
      <div className="quiz-page">

        <div className="page-header">
          <div>
            <h1>🧠 Quiz</h1>
            <p>Test your knowledge and improve your understanding.</p>
          </div>
        </div>

        <div className="quiz-welcome">
          <div className="quiz-welcome-icon">🧠</div>

          <h2>Choose a Subject</h2>

          <p>
            Select a subject below and start practicing.
          </p>
        </div>

        <div className="quiz-subject-grid">
          {subjects.map((subject) => (
            <div
              className="quiz-subject-card"
              key={subject.name}
            >
              <div className="quiz-subject-icon">
                {subject.icon}
              </div>

              <h2>{subject.name}</h2>

              <p>{subject.description}</p>

              <div className="quiz-card-info">
                <span>❓ 5 Questions</span>
                <span>⭐ 5 Marks</span>
              </div>

              <button
                onClick={() => startQuiz(subject.name)}
              >
                Start Quiz →
              </button>
            </div>
          ))}
        </div>

      </div>
    );
  }

  const questions = quizData[selectedSubject];

  // RESULT SCREEN
  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="quiz-page">

        <div className="quiz-result-card">

          <div className="result-icon">
            {percentage >= 80
              ? "🏆"
              : percentage >= 50
              ? "🎉"
              : "📚"}
          </div>

          <h1>Quiz Completed!</h1>

          <p className="result-subject">
            {selectedSubject}
          </p>

          <div className="score-circle">
            <strong>
              {score}/{questions.length}
            </strong>

            <span>{percentage}%</span>
          </div>

          <h2>
            {percentage >= 80
              ? "Excellent work!"
              : percentage >= 50
              ? "Good job!"
              : "Keep practicing!"}
          </h2>

          <p className="result-message">
            You answered {score} out of{" "}
            {questions.length} questions correctly.
          </p>

          <div className="result-buttons">

            <button
              className="quiz-secondary-button"
              onClick={backToSubjects}
            >
              Choose Subject
            </button>

            <button
              className="quiz-primary-button"
              onClick={restartQuiz}
            >
              Try Again
            </button>

          </div>

        </div>

      </div>
    );
  }

  // QUESTION SCREEN
  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">

      <div className="quiz-top-bar">

        <div>
          <span className="quiz-subject-name">
            {selectedSubject}
          </span>

          <h1>Knowledge Quiz</h1>
        </div>

        <button
          className="quit-quiz-button"
          onClick={backToSubjects}
        >
          ✕ Quit Quiz
        </button>

      </div>

      <div className="quiz-progress-info">
        <span>
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="question-card">

        <div className="question-number">
          Question {currentQuestion + 1}
        </div>

        <h2>{question.question}</h2>

        <div className="answer-list">

          {question.options.map((option, index) => (
            <button
              key={option}
              className={`answer-option ${
                selectedAnswer === index
                  ? "answer-selected"
                  : ""
              }`}
              onClick={() => setSelectedAnswer(index)}
            >

              <span className="answer-letter">
                {String.fromCharCode(65 + index)}
              </span>

              <span>{option}</span>

              <span className="answer-radio">
                {selectedAnswer === index
                  ? "●"
                  : "○"}
              </span>

            </button>
          ))}

        </div>

        <div className="quiz-navigation">

          <span>
            Select one answer to continue.
          </span>

          <button
            className="next-question-button"
            onClick={nextQuestion}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;