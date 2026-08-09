import { useNavigate } from "react-router-dom";

const tools = [
  {
    icon: "📄",
    title: "Smart Notes",
    desc: "Generate AI notes",
    path: "/smart-notes",
  },
  {
    icon: "🧠",
    title: "Memory Tricks",
    desc: "Learn faster",
    path: "/memory-tricks",
  },
  {
    icon: "📐",
    title: "Diagram",
    desc: "Visual learning",
    path: "/diagram",
  },
  {
    icon: "📅",
    title: "Planner",
    desc: "Daily schedule",
    path: "/planner",
  },
  {
    icon: "💼",
    title: "Interview",
    desc: "Practice questions",
    path: "/interview",
  },
  {
    icon: "❓",
    title: "Quiz",
    desc: "Test yourself",
    path: "/quiz",
  },
  {
    icon: "🌐",
    title: "Translator",
    desc: "Translate notes",
    path: "/translator",
  },
  {
    icon: "🤖",
    title: "AI Chat",
    desc: "Ask anything",
    path: "/ai-tools",
  },
  {
    icon: "🎯",
    title: "Focus",
    desc: "Pomodoro timer",
    path: "/focus",
  },
  {
    icon: "📊",
    title: "Progress",
    desc: "Track learning",
    path: "/progress",
  },
];

function QuickTools() {
  const navigate = useNavigate();

  return (
    <div className="quick-tools-section">

      <h2>⚡ Quick AI Tools</h2>

      <div className="tools-grid">

        {tools.map((tool) => (
          <div
            className="tool-card"
            key={tool.title}
          >

            <div className="tool-icon">
              {tool.icon}
            </div>

            <h3>{tool.title}</h3>

            <p>{tool.desc}</p>

            <button
              onClick={() => navigate(tool.path)}
            >
              Open
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default QuickTools;