import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api/tasks";

function Tasks() {
  const [subjects] = useState(() => {
    const saved = localStorage.getItem("subjects");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      { id: 1, name: "Machine Learning" },
      { id: 2, name: "Full Stack Development" },
      { id: 3, name: "Internet of Things" },
    ];
  });

  const [tasks, setTasks] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [loading, setLoading] = useState(true);

  const getHeaders = () => {
    const token = localStorage.getItem("token");

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  // Load tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch tasks");
      }

      setTasks(data);
    } catch (error) {
      console.error("Fetch tasks error:", error);
      alert("Unable to load tasks. Please login again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title || !subject || !dueDate) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          title,
          description: subject,
          due_date: dueDate,
          priority,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create task");
      }

      alert("Task added successfully!");

      await fetchTasks();

      setTitle("");
      setSubject("");
      setDueDate("");
      setPriority("Medium");
      setShowForm(false);
    } catch (error) {
      console.error("Add task error:", error);
      alert(error.message);
    }
  };

  // Complete task
  const toggleTask = async (task) => {
    if (task.status === "Completed") {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/${task.id}/complete`,
        {
          method: "PATCH",
          headers: getHeaders(),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to complete task");
      }

      await fetchTasks();
    } catch (error) {
      console.error("Complete task error:", error);
      alert(error.message);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete task");
      }

      await fetchTasks();
    } catch (error) {
      console.error("Delete task error:", error);
      alert(error.message);
    }
  };

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingCount = tasks.length - completedCount;

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
          onClick={() => setShowForm(true)}
        >
          + Add Task
        </button>

      </div>

      <div className="task-stats">

        <div className="task-stat-card">
          <div className="task-stat-icon">📋</div>

          <div>
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
          </div>
        </div>

        <div className="task-stat-card">
          <div className="task-stat-icon">⏳</div>

          <div>
            <p>Pending</p>
            <h2>{pendingCount}</h2>
          </div>
        </div>

        <div className="task-stat-card">
          <div className="task-stat-icon">✅</div>

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
              onClick={() => setShowForm(false)}
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
              onClick={() => setShowForm(false)}
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

          {loading ? (
            <p>Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p>No tasks yet. Add your first task! 🩷</p>
          ) : (
            tasks.map((task) => {

              const completed =
                task.status === "Completed";

              return (
                <div
                  key={task.id}
                  className={`task-item ${
                    completed ? "task-done" : ""
                  }`}
                >

                  <button
                    className="task-checkbox"
                    onClick={() => toggleTask(task)}
                  >
                    {completed ? "✓" : ""}
                  </button>

                  <div className="task-info">

                    <div className="task-top-info">

                      <span className="task-subject">
                        {task.description}
                      </span>

                      <span
                        className={`task-priority ${
                          task.priority.toLowerCase()
                        }`}
                      >
                        {task.priority}
                      </span>

                    </div>

                    <h3>{task.title}</h3>

                    <p>
                      📅 Due:{" "}
                      {task.due_date
                        ? task.due_date.split("T")[0]
                        : "No date"}
                    </p>

                  </div>

                  <div className="task-right">

                    <span
                      className={
                        completed
                          ? "task-completed-status"
                          : "task-pending-status"
                      }
                    >
                      {completed
                        ? "Completed"
                        : "Pending"}
                    </span>

                    <button
                      className="task-delete-button"
                      onClick={() =>
                        deleteTask(task.id)
                      }
                    >
                      🗑️
                    </button>

                  </div>

                </div>
              );
            })
          )}

        </div>

      </div>

    </div>
  );
}

export default Tasks;