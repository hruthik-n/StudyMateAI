import { useState } from "react";
import "../../styles/ai.css";

function AITools() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const getAIResponse = (question) => {
    const text = question.toLowerCase();

    if (text.includes("machine learning")) {
      return "Machine Learning is a branch of AI where computers learn patterns from data and use them to make predictions or decisions.";
    }

    if (text.includes("react")) {
      return "React is a JavaScript library used to build user interfaces using reusable components.";
    }

    if (text.includes("iot") || text.includes("architecture")) {
      return "IoT architecture generally includes devices and sensors, communication networks, data processing, and applications.";
    }

    if (text.includes("study plan")) {
      return "For today, try this plan: 1 hour for your main subject, 30 minutes for revision, 30 minutes for practice questions, and 15 minutes for a quick review.";
    }

    return "I can help you understand study topics. Try asking about Machine Learning, React, IoT, or creating a study plan.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
    };

    const aiMessage = {
      id: Date.now() + 1,
      text: getAIResponse(message),
      sender: "ai",
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      aiMessage,
    ]);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "Explain Machine Learning in simple words",
    "What is React?",
    "Explain IoT architecture",
    "Create a study plan for today",
  ];

  const askSuggestedQuestion = (question) => {
    const userMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
    };

    const aiMessage = {
      id: Date.now() + 1,
      text: getAIResponse(question),
      sender: "ai",
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      aiMessage,
    ]);
  };

  return (
    <div className="ai-page">

      {/* Header */}
      <div className="ai-page-header">

        <div>
          <h1>🤖 AI Study Assistant</h1>

          <p>
            Ask questions, understand concepts and study smarter.
          </p>
        </div>

        <button
          className="new-chat-button"
          onClick={() => setMessages([])}
        >
          + New Chat
        </button>

      </div>

      {/* Chat */}
      <div className="chat-container">

        <div className="chat-messages">

          {/* Welcome Screen */}
          {messages.length === 0 ? (

            <div className="welcome-ai">

              <div className="welcome-ai-icon">
                🤖
              </div>

              <h2>
                How can I help you study today?
              </h2>

              <p>
                Ask me about any subject, concept,
                assignment or exam topic.
              </p>

              <div className="suggestion-grid">

                {suggestedQuestions.map((question) => (

                  <button
                    key={question}
                    className="suggestion-card"
                    onClick={() =>
                      askSuggestedQuestion(question)
                    }
                  >
                    <span>✨</span>
                    {question}
                  </button>

                ))}

              </div>

            </div>

          ) : (

            /* Messages */
            messages.map((msg) => (

              <div
                key={msg.id}
                className={`message ${
                  msg.sender === "user"
                    ? "user-message"
                    : "ai-message"
                }`}
              >

                <div className="message-avatar">
                  {msg.sender === "user"
                    ? "H"
                    : "🤖"}
                </div>

                <div className="message-bubble">
                  {msg.text}
                </div>

              </div>

            ))

          )}

        </div>

        {/* Input */}
        <div className="chat-input-area">

          <div className="chat-input">

            <button className="attach-button">
              📎
            </button>

            <input
              type="text"
              placeholder="Ask anything about your studies..."
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button
              className="send-button"
              onClick={sendMessage}
            >
              ➤
            </button>

          </div>

          <p className="ai-warning">
            AI can make mistakes. Verify important information.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AITools;