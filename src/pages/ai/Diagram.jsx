import { useState } from "react";

function Diagram() {
  const [topic, setTopic] = useState("");
  const [diagram, setDiagram] = useState("");

  const generateDiagram = (selectedTopic = topic) => {
    if (!selectedTopic.trim()) {
      alert("Please enter a topic first!");
      return;
    }

    setTopic(selectedTopic);
    setDiagram(selectedTopic);
  };

  const getDiagramSteps = () => {
    switch (diagram) {
      case "Machine Learning":
        return [
          "📚 Input Data",
          "⚙️ Data Processing",
          "🧠 Model Training",
          "💡 Prediction",
        ];

      case "IoT Architecture":
        return [
          "📡 Sensors",
          "🌐 Internet / Network",
          "☁️ Cloud Processing",
          "📊 Application",
        ];

      case "React Components":
        return [
          "⚛️ App Component",
          "🧩 Parent Component",
          "🔹 Child Components",
          "🖥️ User Interface",
        ];

      case "Database":
        return [
          "👤 User",
          "📝 Application",
          "🗄️ Database",
          "📊 Stored Data",
        ];

      default:
        return [
          "📚 Input",
          "⚙️ Processing",
          "💡 Output",
        ];
    }
  };

  return (
    <div className="diagram-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📐 Diagram Generator</h1>
          <p>
            Understand difficult topics with simple visual diagrams.
          </p>
        </div>
      </div>

      {/* Generator */}
      <div className="diagram-generator">

        <h2>✨ Create a Diagram</h2>

        <div className="diagram-input">

          <input
            type="text"
            placeholder="Enter a topic... e.g. Machine Learning"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <button onClick={() => generateDiagram()}>
            📐 Generate Diagram
          </button>

        </div>

      </div>

      {/* Example Topics */}
      <div className="example-section">

        <h2>💡 Try These Topics</h2>

        <div className="example-grid">

          <div
            className="example-card"
            onClick={() =>
              generateDiagram("Machine Learning")
            }
          >
            <div className="example-icon">🤖</div>
            <h3>Machine Learning</h3>
            <p>ML workflow diagram</p>
          </div>

          <div
            className="example-card"
            onClick={() =>
              generateDiagram("IoT Architecture")
            }
          >
            <div className="example-icon">🌐</div>
            <h3>IoT Architecture</h3>
            <p>IoT architecture diagram</p>
          </div>

          <div
            className="example-card"
            onClick={() =>
              generateDiagram("React Components")
            }
          >
            <div className="example-icon">⚛️</div>
            <h3>React Components</h3>
            <p>Component structure</p>
          </div>

          <div
            className="example-card"
            onClick={() =>
              generateDiagram("Database")
            }
          >
            <div className="example-icon">🗄️</div>
            <h3>Database</h3>
            <p>Database structure</p>
          </div>

        </div>

      </div>

      {/* Generated Diagram */}
      {diagram && (
        <div className="generated-diagram">

          <h2>📊 Generated Diagram</h2>

          <div className="diagram-box">

            {/* Main Topic */}
            <div className="diagram-node main-node">
              {diagram}
            </div>

            {/* Arrow */}
            <div className="diagram-arrow">
              ↓
            </div>

            {/* Steps */}
            <div className="diagram-flow">

  {getDiagramSteps().map((step, index) => (
    <div
      key={index}
      className="diagram-step-wrapper"
    >

      <div className="diagram-node step-node">
        {step}
      </div>

      {index < getDiagramSteps().length - 1 && (
        <div className="diagram-arrow">
          ↓
        </div>
      )}

    </div>
  ))}

</div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Diagram;