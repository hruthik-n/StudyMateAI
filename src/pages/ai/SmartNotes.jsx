import { useState } from "react";

function SmartNotes() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState(null);

  const generateNotes = () => {
    if (!topic.trim()) {
      alert("Please enter a topic first!");
      return;
    }

    const topicName = topic.trim();

    let generatedNotes;

    switch (topicName.toLowerCase()) {
      case "machine learning":
        generatedNotes = {
          title: "Machine Learning",
          definition:
            "Machine Learning is a branch of Artificial Intelligence that allows computers to learn from data and make predictions or decisions.",
          keyPoints: [
            "Learns patterns from data",
            "Reduces the need for explicit programming",
            "Can be used for prediction and classification",
            "Improves performance with more useful data",
          ],
          types: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
          ],
          example:
            "Email spam detection is an example of Machine Learning.",
          revision:
            "Remember: Machine Learning = Data + Learning + Prediction",
        };
        break;

      case "internet of things":
      case "iot":
        generatedNotes = {
          title: "Internet of Things",
          definition:
            "IoT is a technology in which physical devices are connected to the Internet to collect, exchange and process data.",
          keyPoints: [
            "Uses sensors to collect data",
            "Devices communicate through networks",
            "Data can be processed in the cloud",
            "Applications provide useful services to users",
          ],
          types: [
            "Sensors and Devices",
            "Communication Network",
            "Data Processing",
            "Application Layer",
          ],
          example:
            "A smartwatch that monitors health information and sends data to a mobile application is an IoT device.",
          revision:
            "Remember: IoT = Devices + Network + Data + Application",
        };
        break;

      case "react":
      case "react components":
        generatedNotes = {
          title: "React Components",
          definition:
            "React components are reusable building blocks used to create user interfaces.",
          keyPoints: [
            "Components make applications easier to develop",
            "They can be reused in different parts of an application",
            "Components can receive data using props",
            "State can be used to manage changing data",
          ],
          types: [
            "Functional Components",
            "Class Components",
            "Parent Components",
            "Child Components",
          ],
          example:
            "A Button component can be created once and reused throughout a React application.",
          revision:
            "Remember: Component = Reusable UI Building Block",
        };
        break;

      case "data structures":
        generatedNotes = {
          title: "Data Structures",
          definition:
            "A data structure is a way of organizing and storing data so that it can be accessed and processed efficiently.",
          keyPoints: [
            "Arrays store elements using indexes",
            "Stacks follow LIFO",
            "Queues follow FIFO",
            "Trees and graphs are non-linear data structures",
          ],
          types: [
            "Array",
            "Stack",
            "Queue",
            "Linked List",
            "Tree",
            "Graph",
          ],
          example:
            "A stack is commonly used when implementing undo operations.",
          revision:
            "Remember: Stack = LIFO, Queue = FIFO",
        };
        break;

      default:
        generatedNotes = {
          title: topicName,
          definition:
            `${topicName} is an important study topic. Break the topic into smaller concepts to understand it easily.`,
          keyPoints: [
            "Understand the basic definition",
            "Learn the important concepts",
            "Study examples",
            "Revise the topic regularly",
          ],
          types: [
            "Definition",
            "Key Concepts",
            "Examples",
            "Revision",
          ],
          example:
            `Try to connect ${topicName} with a real-world example.`,
          revision:
            "Read the key points and explain the topic in your own words.",
        };
    }

    setNotes(generatedNotes);
  };

  const clearNotes = () => {
    setTopic("");
    setNotes(null);
  };

  return (
    <div className="smart-notes-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📄 Smart Notes</h1>
          <p>
            Generate simple and organized study notes from any topic.
          </p>
        </div>
      </div>

      {/* Generator */}
      <div className="smart-notes-generator">

        <h2>✨ Generate Smart Notes</h2>

        <div className="smart-notes-input">

          <input
            type="text"
            placeholder="Enter a topic... e.g. Machine Learning"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                generateNotes();
              }
            }}
          />

          <button onClick={generateNotes}>
            📄 Generate Notes
          </button>

        </div>

        <div className="smart-note-examples">
          <span>Try:</span>

          <button onClick={() => setTopic("Machine Learning")}>
            Machine Learning
          </button>

          <button onClick={() => setTopic("IoT")}>
            IoT
          </button>

          <button onClick={() => setTopic("React")}>
            React
          </button>

          <button onClick={() => setTopic("Data Structures")}>
            Data Structures
          </button>
        </div>

      </div>

      {/* Generated Notes */}
      {notes && (
        <div className="generated-smart-notes">

          <div className="smart-notes-title">
            <div>
              <h2>📚 {notes.title}</h2>
              <p>Smart Study Notes</p>
            </div>

            <button
              className="clear-smart-notes"
              onClick={clearNotes}
            >
              ✕ Clear
            </button>
          </div>

          {/* Definition */}
          <div className="smart-note-section">
            <h3>📌 Definition</h3>
            <p>{notes.definition}</p>
          </div>

          {/* Key Points */}
          <div className="smart-note-section">
            <h3>⭐ Key Points</h3>

            <ul>
              {notes.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Types */}
          <div className="smart-note-section">
            <h3>📚 Important Concepts</h3>

            <div className="smart-concept-grid">
              {notes.types.map((type, index) => (
                <div
                  className="smart-concept-card"
                  key={index}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          {/* Example */}
          <div className="smart-note-section">
            <h3>💡 Example</h3>
            <p>{notes.example}</p>
          </div>

          {/* Quick Revision */}
          <div className="smart-revision">
            <h3>🧠 Quick Revision</h3>
            <p>{notes.revision}</p>
          </div>

        </div>
      )}

      {/* Benefits */}
      {!notes && (
        <div className="smart-notes-features">

          <h2>🚀 Why Smart Notes?</h2>

          <div className="smart-feature-grid">

            <div className="smart-feature-card">
              <span>📌</span>
              <h3>Simple</h3>
              <p>
                Difficult topics are organized into simple sections.
              </p>
            </div>

            <div className="smart-feature-card">
              <span>⭐</span>
              <h3>Key Points</h3>
              <p>
                Focus on the most important points for revision.
              </p>
            </div>

            <div className="smart-feature-card">
              <span>💡</span>
              <h3>Examples</h3>
              <p>
                Understand concepts using simple examples.
              </p>
            </div>

            <div className="smart-feature-card">
              <span>🧠</span>
              <h3>Quick Revision</h3>
              <p>
                Revise important concepts quickly before exams.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default SmartNotes;