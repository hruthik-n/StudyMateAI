import { useState, useEffect } from "react";

function Tasks() {
  const [subjects] = useState(() => {
    const saved = localStorage.getItem("subjects");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1,
        name: "Machine Learning",
      },
      {
        id: 2,
        name: "Full Stack Development",
      },
      {
        id: 3,
        name: "Internet of Things",
      },
    ];
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1,
        title: "Complete ML Assignment",
        subject: "Machine Learning",
        dueDate: "2026-08-08",
        priority: "High",
        completed: false,
      },
      {
        id: 2,
        title: "React Practice",
        subject: "Full Stack Development",
        dueDate: "2026-08-09",
        priority: "Medium",
        completed: false,
      },
      {
        id: 3,
        title: "Revise IoT Module 2",
        subject: "Internet of Things",
        dueDate: "2026-08-10",
        priority: "Low",
        completed: true,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addTask = () => {
    if (!title || !subject || !dueDate) {
      alert("Please fill all fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      subject,
      dueDate,
      priority,
      completed: false,
    };

    setTasks([newTask, ...tasks]);

    setTitle("");
    setSubject("");
    setDueDate("");
    setPriority("Medium");
    setShowForm(false);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(
        tasks.filter((task) => task.id !== id)
      );
    }
  };

  const completedCount =
    tasks.filter((t) => t.completed).length;

  const pendingCount =
    tasks.length - completedCount;

  return (
    <div className="tasks-page">

      <div className="tasks-header">

        <div>
          <h1>✅ My Tasks</h1>
          <p>
            Manage assignments,
            deadlines and study goals.
          </p>
        </div>

        <button
          className="add-task-button"
          onClick={() =>
            setShowForm(true)
          }
        >
          + Add Task
        </button>

      </div>

      <div className="task-stats">

        <div className="task-stat-card">
          <div className="task-stat-icon">
            📋
          </div>

          <div>
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
          </div>
        </div>

        <div className="task-stat-card">
          <div className="task-stat-icon">
            ⏳
          </div>

          <div>
            <p>Pending</p>
            <h2>{pendingCount}</h2>
          </div>
        </div>

        <div className="task-stat-card">
          <div className="task-stat-icon">
            ✅
          </div>

          <div>
            <p>Completed</p>
            <h2>{completedCount}</h2>
          </div>
        </div>

      </div>

      {showForm && (

        <div className="task-form">

          <div className="task-form-header">

            <h2>Add New Task</h2>

            <button
              onClick={() =>
                setShowForm(false)
              }
            >
              ✕
            </button>

          </div>

          <div className="task-form-grid">

            <div>
              <label>Task Name</label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />
            </div>

            <div>
              <label>Subject</label>

              <select
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
              >
                <option value="">
                  Select Subject
                </option>

                {subjects.map((item) => (
                  <option
                    key={item.id}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Due Date</label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
              />
            </div>

            <div>
              <label>Priority</label>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

          </div>

          <div className="task-form-buttons">

            <button
              className="task-cancel-button"
              onClick={() =>
                setShowForm(false)
              }
            >
              Cancel
            </button>

            <button
              className="task-save-button"
              onClick={addTask}
            >
              Add Task
            </button>

          </div>

        </div>

      )}
            <div className="tasks-container">

        <div className="tasks-section-header">
          <div>
            <h2>Your Tasks</h2>
            <p>Stay focused and complete your goals.</p>
          </div>
        </div>

        <div className="tasks-list">

          {tasks.map((task) => (

            <div
              key={task.id}
              className={`task-item ${
                task.completed ? "task-done" : ""
              }`}
            >

              <button
                className="task-checkbox"
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? "✓" : ""}
              </button>

              <div className="task-info">

                <div className="task-top-info">

                  <span className="task-subject">
                    {task.subject}
                  </span>

                  <span
                    className={`task-priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                </div>

                <h3>{task.title}</h3>

                <p>
                  📅 Due: {task.dueDate}
                </p>

              </div>

              <div className="task-right">

                <span
                  className={
                    task.completed
                      ? "task-completed-status"
                      : "task-pending-status"
                  }
                >
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </span>

                <button
                  className="task-delete-button"
                  onClick={() => deleteTask(task.id)}
                >
                  🗑️
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Tasks;