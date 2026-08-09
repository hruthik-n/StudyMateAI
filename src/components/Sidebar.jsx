import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },
    {
      name: "AI Tools",
      icon: "🤖",
      path: "/ai-tools",
    },
    {
      name: "Subjects",
      icon: "📚",
      path: "/subjects",
    },
    {
      name: "Notes",
      icon: "📝",
      path: "/notes",
    },
    {
      name: "Study Planner",
      icon: "📅",
      path: "/planner",
    },
    {
      name: "Tasks",
      icon: "✅",
      path: "/tasks",
    },
    {
      name: "Quiz",
      icon: "🧠",
      path: "/quiz",
    },
    {
      name: "Focus Mode",
      icon: "🎯",
      path: "/focus",
    },
    {
      name: "Progress",
      icon: "📊",
      path: "/progress",
    },
    {
      name: "Diagram Generator",
      icon: "📐",
      path: "/diagram",
    },
    {
      name: "Memory Tricks",
      icon: "🧠",
      path: "/memory-tricks",
    },
    {
      name: "Smart Notes",
      icon: "📄",
      path: "/smart-notes",
    },
    {
      name: "Interview Practice",
      icon: "💼",
      path: "/interview",
    },
    {
      name: "Translator",
      icon: "🌐",
      path: "/translator",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <span className="logo-icon">📚</span>
        <h2>StudyMate</h2>
      </div>

      {/* Navigation */}
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Settings</span>
        </NavLink>

        {/* Logout */}
        <button
          className="nav-item logout-button"
          onClick={handleLogout}
        >
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;