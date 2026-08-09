import { useState } from "react";

function MemoryTricks() {
  const [topic, setTopic] = useState("");
  const [trick, setTrick] = useState("");

  const generateTrick = (selectedTopic = topic) => {
  if (!selectedTopic.trim()) {
    alert("Please enter a topic first!");
    return;
  }

  setTopic(selectedTopic);

  const tricks = {
    "Machine Learning":
      "Remember the main ML types as: Supervised → Unsupervised → Reinforcement.",

    "Data Structures":
      "Remember: Stack = LIFO (Last In First Out), Queue = FIFO (First In First Out).",

    "IoT":
      "Remember the IoT flow as: Sense → Connect → Process → Act.",

    "Database":
      "Remember CRUD as: Create → Read → Update → Delete.",

    "React":
      "Remember React structure as: App → Parent → Child → User Interface.",
  };

  setTrick(
    tricks[selectedTopic] ||
      `🧠 Memory Trick for "${selectedTopic}": Break the topic into small parts and connect each part with a simple story, keyword, acronym, or visual image.`
  );
};

  return (
    <div className="memory-page">
      <div className="memory-header">
        <h1>🧠 Memory Tricks</h1>
        <p>Learn difficult topics faster with simple memory techniques.</p>
      </div>

      <div className="memory-card">
        <h2>✨ Create a Memory Trick</h2>

        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={generateTrick}>
          🧠 Generate Trick
        </button>
      </div>

      {trick && (
        <div className="trick-result">
          <h2>💡 Your Memory Trick</h2>
          <p>{trick}</p>
        </div>
      )}

      <div className="memory-tips">
        <h2>📚 Useful Techniques</h2>

        <div className="tips-grid">
          <div className="tip-card">
            <span>🔤</span>
            <h3>Mnemonics</h3>
            <p>Use short words or phrases to remember information.</p>
          </div>

          <div className="tip-card">
            <span>📖</span>
            <h3>Story Method</h3>
            <p>Connect different points together as a simple story.</p>
          </div>

          <div className="tip-card">
            <span>🖼️</span>
            <h3>Visual Memory</h3>
            <p>Convert difficult concepts into images or diagrams.</p>
          </div>

          <div className="tip-card">
            <span>🔁</span>
            <h3>Active Recall</h3>
            <p>Close your notes and try to remember the topic yourself.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryTricks;