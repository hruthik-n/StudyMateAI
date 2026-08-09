import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

import AITools from "./pages/ai/AITools";
import Notes from "./pages/ai/Notes";
import Planner from "./pages/ai/Planner";
import Quiz from "./pages/ai/Quiz";
import Focus from "./pages/ai/Focus";
import Progress from "./pages/ai/Progress";
import MemoryTricks from "./pages/ai/MemoryTricks";
import Diagram from "./pages/ai/Diagram";
import SmartNotes from "./pages/ai/SmartNotes";
import Interview from "./pages/ai/Interview";
import Translator from "./pages/ai/Translator";

import "./App.css";

function App() {
  const location = useLocation();

  // Login and Register should NOT show Sidebar
  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/register";

  return (
    <>
      {/* Show Sidebar on all pages except Login and Register */}
      {!isAuthPage && <Sidebar />}

      <main
        className={
          isAuthPage ? "auth-content" : "main-content"
        }
      >
        <Routes>

          {/* =========================
              LOGIN
              ========================= */}
          <Route
            path="/"
            element={<Login />}
          />

          {/* =========================
              REGISTER
              ========================= */}
          <Route
            path="/register"
            element={<Register />}
          />

          {/* =========================
              DASHBOARD
              ========================= */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* =========================
              AI TOOLS
              ========================= */}
          <Route
            path="/ai-tools"
            element={
              <ProtectedRoute>
                <AITools />
              </ProtectedRoute>
            }
          />

          {/* =========================
              SUBJECTS
              ========================= */}
          <Route
            path="/subjects"
            element={
              <ProtectedRoute>
                <Subjects />
              </ProtectedRoute>
            }
          />

          {/* =========================
              TASKS
              ========================= */}
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />

          {/* =========================
              NOTES
              ========================= */}
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />

          {/* =========================
              STUDY PLANNER
              ========================= */}
          <Route
            path="/planner"
            element={
              <ProtectedRoute>
                <Planner />
              </ProtectedRoute>
            }
          />

          {/* =========================
              QUIZ
              ========================= */}
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />

          {/* =========================
              FOCUS MODE
              ========================= */}
          <Route
            path="/focus"
            element={
              <ProtectedRoute>
                <Focus />
              </ProtectedRoute>
            }
          />

          {/* =========================
              PROGRESS
              ========================= */}
          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            }
          />

          {/* =========================
              MEMORY TRICKS
              ========================= */}
          <Route
            path="/memory-tricks"
            element={
              <ProtectedRoute>
                <MemoryTricks />
              </ProtectedRoute>
            }
          />

          {/* =========================
              DIAGRAM GENERATOR
              ========================= */}
          <Route
            path="/diagram"
            element={
              <ProtectedRoute>
                <Diagram />
              </ProtectedRoute>
            }
          />

          {/* =========================
              SMART NOTES
              ========================= */}
          <Route
            path="/smart-notes"
            element={
              <ProtectedRoute>
                <SmartNotes />
              </ProtectedRoute>
            }
          />

          {/* =========================
              INTERVIEW PRACTICE
              ========================= */}
          <Route
            path="/interview"
            element={
              <ProtectedRoute>
                <Interview />
              </ProtectedRoute>
            }
          />

          {/* =========================
              TRANSLATOR
              ========================= */}
          <Route
            path="/translator"
            element={
              <ProtectedRoute>
                <Translator />
              </ProtectedRoute>
            }
          />

          {/* =========================
              SETTINGS
              ========================= */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>
    </>
  );
}

export default App;