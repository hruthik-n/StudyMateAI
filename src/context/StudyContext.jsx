import { createContext, useContext, useState, useEffect } from "react";

const StudyContext = createContext(null);

export const StudyProvider = ({ children }) => {
  // =========================
  // SUBJECTS
  // =========================
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects");

    if (savedSubjects) {
      return JSON.parse(savedSubjects);
    }

    return [
      {
        id: 1,
        icon: "🤖",
        name: "Machine Learning",
        notes: 12,
        progress: 75,
      },
      {
        id: 2,
        icon: "💻",
        name: "Full Stack Development",
        notes: 8,
        progress: 60,
      },
      {
        id: 3,
        icon: "🌐",
        name: "Internet of Things",
        notes: 10,
        progress: 45,
      },
    ];
  });

  // =========================
  // TASKS
  // =========================
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // =========================
  // NOTES
  // =========================
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // =========================
  // PLANNER
  // =========================
  const [planner, setPlanner] = useState(() => {
    const savedPlanner = localStorage.getItem("planner");

    return savedPlanner ? JSON.parse(savedPlanner) : [];
  });

  // =========================
  // SAVE SUBJECTS
  // =========================
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  // =========================
  // SAVE TASKS
  // =========================
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // =========================
  // SAVE NOTES
  // =========================
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // =========================
  // SAVE PLANNER
  // =========================
  useEffect(() => {
    localStorage.setItem("planner", JSON.stringify(planner));
  }, [planner]);

  return (
    <StudyContext.Provider
      value={{
        subjects,
        setSubjects,

        tasks,
        setTasks,

        notes,
        setNotes,

        planner,
        setPlanner,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

// =========================
// CUSTOM HOOK
// =========================
export const useStudy = () => {
  const context = useContext(StudyContext);

  if (!context) {
    throw new Error(
      "useStudy must be used inside a StudyProvider"
    );
  }

  return context;
};