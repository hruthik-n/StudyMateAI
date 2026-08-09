import { useState } from "react";
import "../../styles/interview.css";

const interviewData = {
  java: [
    {
      question: "What is Java?",
      answer:
        "Java is a high-level, object-oriented programming language used to develop applications.",
    },
    {
      question: "What is OOP in Java?",
      answer:
        "OOP stands for Object-Oriented Programming. It is based on concepts such as class, object, inheritance, polymorphism, abstraction and encapsulation.",
    },
    {
      question: "What is the difference between JDK, JRE and JVM?",
      answer:
        "JDK is used to develop Java programs, JRE provides the environment to run Java programs, and JVM executes Java bytecode.",
    },
    {
      question: "What is inheritance?",
      answer:
        "Inheritance is a feature where one class acquires the properties and methods of another class.",
    },
    {
      question: "What is a constructor?",
      answer:
        "A constructor is a special method used to initialize an object when it is created.",
    },
  ],

  python: [
    {
      question: "What is Python?",
      answer:
        "Python is a high-level, interpreted and easy-to-learn programming language.",
    },
    {
      question: "What are the advantages of Python?",
      answer:
        "Python has simple syntax, large libraries, portability and supports object-oriented programming.",
    },
    {
      question: "What is a list in Python?",
      answer:
        "A list is an ordered and mutable collection that can store multiple values.",
    },
    {
      question: "What is a function?",
      answer:
        "A function is a reusable block of code designed to perform a particular task.",
    },
    {
      question: "What is a dictionary?",
      answer:
        "A dictionary stores data in key-value pairs.",
    },
  ],

  react: [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used for building user interfaces.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable building block of a React user interface.",
    },
    {
      question: "What are props?",
      answer:
        "Props are used to pass data from a parent component to a child component.",
    },
    {
      question: "What is state?",
      answer:
        "State is data managed inside a React component that can change over time.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that allows HTML-like code to be written inside JavaScript.",
    },
  ],

  "machine learning": [
    {
      question: "What is Machine Learning?",
      answer:
        "Machine Learning is a branch of AI that allows computers to learn patterns from data and make predictions or decisions.",
    },
    {
      question: "What are the types of Machine Learning?",
      answer:
        "The main types are supervised learning, unsupervised learning and reinforcement learning.",
    },
    {
      question: "What is supervised learning?",
      answer:
        "Supervised learning uses labelled data to train a model for prediction or classification.",
    },
    {
      question: "What is unsupervised learning?",
      answer:
        "Unsupervised learning finds patterns or groups in data without labelled outputs.",
    },
    {
      question: "What is classification?",
      answer:
        "Classification is a machine learning task that assigns data to predefined categories.",
    },
  ],
};

function Interview() {
  const [topic, setTopic] = useState("");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const startInterview = () => {
    if (!topic.trim()) {
      alert("Please enter a topic first!");
      return;
    }

    const selectedTopic = topic.trim().toLowerCase();

    let selectedQuestions = interviewData[selectedTopic];

    if (!selectedQuestions) {
      selectedQuestions = [
        {
          question: `What is your understanding of ${topic}?`,
          answer: `${topic} is an important technical topic. Explain its definition, important concepts and real-world applications.`,
        },
        {
          question: `What are the important concepts of ${topic}?`,
          answer: `The important concepts depend on the topic. Explain the main concepts and their purpose.`,
        },
        {
          question: `Where is ${topic} used?`,
          answer: `${topic} can be used in different real-world applications depending on its purpose.`,
        },
      ];
    }

    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer("");
    setFeedback("");
    setFinished(false);
    setStarted(true);
  };

  const submitAnswer = () => {
    if (!userAnswer.trim()) {
      alert("Please enter your answer first!");
      return;
    }

    if (userAnswer.trim().length >= 30) {
      setFeedback(
        "✅ Good answer! Your explanation has enough detail. Compare it with the suggested answer below."
      );
      setScore((previousScore) => previousScore + 1);
    } else {
      setFeedback(
        "💡 Your answer is a little short. Try explaining the concept with a definition and example."
      );
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      setFinished(true);
    }
  };

  const restartInterview = () => {
    setStarted(false);
    setFinished(false);
    setQuestions([]);
    setCurrentQuestion(0);
    setUserAnswer("");
    setFeedback("");
    setScore(0);
  };

  return (
    <div className="interview-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>💼 Interview Practice</h1>
          <p>
            Practice interview questions and improve your confidence.
          </p>
        </div>
      </div>

      {/* Start Screen */}
      {!started && (
        <>
          <div className="interview-card">

            <h2>🎯 Start Interview Practice</h2>

            <p className="interview-description">
              Enter a subject or technology and practice sample interview
              questions.
            </p>

            <div className="interview-input-row">
              <input
                type="text"
                placeholder="Enter a topic... e.g. Java, Python, React"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    startInterview();
                  }
                }}
              />

              <button onClick={startInterview}>
                🚀 Start Practice
              </button>
            </div>

            <div className="interview-examples">
              <span>Try:</span>

              <button onClick={() => setTopic("Java")}>
                Java
              </button>

              <button onClick={() => setTopic("Python")}>
                Python
              </button>

              <button onClick={() => setTopic("React")}>
                React
              </button>

              <button onClick={() => setTopic("Machine Learning")}>
                Machine Learning
              </button>
            </div>

          </div>

          {/* Benefits */}
          <div className="interview-benefits">

            <h2>🚀 Why Practice Interviews?</h2>

            <div className="interview-benefit-grid">

              <div className="interview-benefit-card">
                <span>🎯</span>
                <h3>Build Confidence</h3>
                <p>
                  Practice answering questions before the real interview.
                </p>
              </div>

              <div className="interview-benefit-card">
                <span>🧠</span>
                <h3>Improve Knowledge</h3>
                <p>
                  Revise important concepts related to your subject.
                </p>
              </div>

              <div className="interview-benefit-card">
                <span>💬</span>
                <h3>Practice Answers</h3>
                <p>
                  Learn how to explain technical concepts clearly.
                </p>
              </div>

              <div className="interview-benefit-card">
                <span>💼</span>
                <h3>Interview Ready</h3>
                <p>
                  Prepare yourself for technical and placement interviews.
                </p>
              </div>

            </div>

          </div>
        </>
      )}

      {/* Interview Screen */}
      {started && !finished && questions.length > 0 && (
        <div className="active-interview">

          <div className="interview-progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <div className="question-card">

            <h2>
              💼 {topic}
            </h2>

            <h3>
              Question {currentQuestion + 1}
            </h3>

            <p className="question-text">
              {questions[currentQuestion].question}
            </p>

            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />

            {!feedback && (
              <button
                className="submit-answer-button"
                onClick={submitAnswer}
              >
                ✅ Submit Answer
              </button>
            )}

            {feedback && (
              <div className="feedback-box">

                <h3>🤖 Feedback</h3>

                <p>{feedback}</p>

                <div className="suggested-answer">
                  <h4>⭐ Suggested Answer</h4>

                  <p>
                    {questions[currentQuestion].answer}
                  </p>
                </div>

                <button
                  className="next-question-button"
                  onClick={nextQuestion}
                >
                  {currentQuestion === questions.length - 1
                    ? "🏆 Finish Interview"
                    : "➡️ Next Question"}
                </button>

              </div>
            )}

          </div>

          <button
            className="back-interview-button"
            onClick={restartInterview}
          >
            ← Exit Interview
          </button>

        </div>
      )}

      {/* Result */}
      {finished && (
        <div className="interview-result">

          <div className="result-icon">
            🏆
          </div>

          <h2>Interview Completed!</h2>

          <p>
            Great job! You completed the {topic} interview practice.
          </p>

          <div className="score-box">
            <h3>Your Score</h3>
            <strong>
              {score} / {questions.length}
            </strong>
          </div>

          <button onClick={restartInterview}>
            🔄 Practice Again
          </button>

        </div>
      )}

    </div>
  );
}

export default Interview;