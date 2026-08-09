import { useEffect, useState } from "react";
import { useStudy } from "../context/StudyContext";

function Subjects() {
  const defaultSubjects = [
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

  const { subjects, setSubjects } = useStudy();

  const [showForm, setShowForm] = useState(false);
  const [subjectName, setSubjectName] = useState("");

  // Add default subjects if there are no subjects
  useEffect(() => {
    if (!subjects || subjects.length === 0) {
      setSubjects(defaultSubjects);
    }
  }, []);

  // Add new subject
  const addSubject = () => {
    if (!subjectName.trim()) {
      alert("Please enter a subject name");
      return;
    }

    const newSubject = {
      id: Date.now(),
      icon: "📚",
      name: subjectName.trim(),
      notes: 0,
      progress: 0,
    };

    setSubjects([...subjects, newSubject]);

    setSubjectName("");
    setShowForm(false);
  };

  return (
    <div className="subjects-page">

      {/* HEADER */}
      <div className="subjects-header">
        <div>
          <h1>📚 My Subjects</h1>

          <p>
            Organize your subjects and track your learning progress.
          </p>
        </div>

        <button
          className="add-subject-button"
          onClick={() => setShowForm(true)}
        >
          + Add Subject
        </button>
      </div>


      {/* ADD SUBJECT FORM */}
      {showForm && (
        <div className="add-subject-box">

          <h2>Add New Subject</h2>

          <input
            type="text"
            placeholder="Enter subject name..."
            value={subjectName}
            onChange={(event) =>
              setSubjectName(event.target.value)
            }
          />

          <div className="subject-form-buttons">

            <button
              className="cancel-subject-button"
              onClick={() => {
                setShowForm(false);
                setSubjectName("");
              }}
            >
              Cancel
            </button>

            <button
              className="save-subject-button"
              onClick={addSubject}
            >
              Add Subject
            </button>

          </div>

        </div>
      )}


      {/* SUBJECT CARDS */}
      <div className="subjects-grid">

        {subjects && subjects.length > 0 ? (
          subjects.map((subject) => (

            <div
              className="subject-card"
              key={subject.id}
            >

              {/* CARD TOP */}
              <div className="subject-card-top">

                <div className="subject-icon">
                  {subject.icon}
                </div>

                <button
                  className="subject-menu"
                  title="More options"
                >
                  ⋮
                </button>

              </div>


              {/* SUBJECT NAME */}
              <h2>
                {subject.name}
              </h2>


              {/* NOTES */}
              <p className="subject-notes">
                📝 {subject.notes} Notes
              </p>


              {/* PROGRESS */}
              <div className="progress-info">

                <span>
                  Progress
                </span>

                <strong>
                  {subject.progress}%
                </strong>

              </div>


              {/* PROGRESS BAR */}
              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${subject.progress}%`,
                  }}
                ></div>

              </div>


              {/* OPEN BUTTON */}
              <button className="open-subject-button">
                Open Subject →
              </button>

            </div>

          ))
        ) : (
          <div className="no-subjects">
            <h2>📚 No Subjects Yet</h2>

            <p>
              Click "+ Add Subject" to create your first subject.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Subjects;