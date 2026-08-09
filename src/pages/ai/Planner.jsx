import { useState } from "react";
import "../../styles/planner.css";

function Planner() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      subject: "Machine Learning",
      topic: "Classification",
      date: "Today",
      time: "10:00 AM",
      completed: false,
    },
    {
      id: 2,
      subject: "Full Stack Development",
      topic: "React Components",
      date: "Today",
      time: "2:00 PM",
      completed: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addPlan = () => {
    if (!subject || !topic || !date || !time) {
      alert("Please fill all the fields.");
      return;
    }

    const newPlan = {
      id: Date.now(),
      subject,
      topic,
      date,
      time,
      completed: false,
    };

    setPlans((prevPlans) => [...prevPlans, newPlan]);

    setSubject("");
    setTopic("");
    setDate("");
    setTime("");

    setShowForm(false);
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const toggleComplete = (id) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id
          ? { ...plan, completed: !plan.completed }
          : plan
      )
    );
  };
  const formatDate = (dateString) => {
  if (!dateString) return "";

  // For old/default plans
  if (dateString === "Today") {
    return "Today";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (timeString) => {
  if (!timeString) return "";

  // If already formatted like "10:00 AM"
  if (timeString.includes("AM") || timeString.includes("PM")) {
    return timeString;
  }

  const [hours, minutes] = timeString.split(":");

  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

  return (
    <div className="planner-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📅 Study Planner</h1>
          <p>Plan your study time and stay organized.</p>
        </div>

        <button
          className="create-note-button"
          onClick={() => setShowForm(true)}
        >
          + Add Study Plan
        </button>
      </div>

      {/* Add Plan Form */}
      {showForm && (
        <div className="planner-form">

          <div className="planner-form-header">
            <h2>📚 Create Study Plan</h2>

            <button
              className="close-note-editor"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>

          <label>Subject</label>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select subject</option>
            <option value="Machine Learning">
              Machine Learning
            </option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
            <option value="Internet of Things">
              Internet of Things
            </option>
            <option value="Data Structures">
              Data Structures
            </option>
            <option value="General">
              General
            </option>
          </select>

          <label>Topic</label>

          <input
            type="text"
            placeholder="Enter study topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <div className="planner-row">

            <div>
              <label>Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div>
              <label>Time</label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

          </div>

          <div className="planner-buttons">

            <button
              className="cancel-note-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

            <button
              className="save-note-button"
              onClick={addPlan}
            >
              Save Plan
            </button>

          </div>

        </div>
      )}

      {/* Statistics */}
      <div className="planner-stats">

        <div className="planner-stat-card">
          <span>📚</span>
          <div>
            <h3>{plans.length}</h3>
            <p>Total Plans</p>
          </div>
        </div>

        <div className="planner-stat-card">
          <span>⏳</span>
          <div>
            <h3>
              {plans.filter((plan) => !plan.completed).length}
            </h3>
            <p>Pending</p>
          </div>
        </div>

        <div className="planner-stat-card">
          <span>✅</span>
          <div>
            <h3>
              {plans.filter((plan) => plan.completed).length}
            </h3>
            <p>Completed</p>
          </div>
        </div>

      </div>

      {/* Study Plans */}
      <div className="planner-section">

        <h2>📖 My Study Plans</h2>

        <div className="planner-grid">

          {plans.length > 0 ? (
            plans.map((plan) => (

              <div
                className={`planner-card ${
                  plan.completed ? "completed-plan" : ""
                }`}
                key={plan.id}
              >

                <div className="planner-card-top">

                  <span className="note-subject">
                    {plan.subject}
                  </span>

                 <span className="planner-time">
                  🕐 {formatTime(plan.time)}
                 </span>

                </div>

                <h3>{plan.topic}</h3>

                <p>📅 {formatDate(plan.date)}</p>

                <div className="planner-card-footer">

                  <button
                    className="complete-button"
                    onClick={() => toggleComplete(plan.id)}
                  >
                    {plan.completed
                      ? "↩️ Mark Pending"
                      : "✅ Complete"}
                  </button>

                  <button
                    className="delete-note-button"
                    onClick={() => deletePlan(plan.id)}
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            ))
          ) : (
            <div className="no-notes">
              <div>📅</div>
              <h2>No study plans</h2>
              <p>Add a study plan to get started.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Planner;