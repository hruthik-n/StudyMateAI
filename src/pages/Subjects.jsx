import { useState } from "react";

function Subjects() {
  const [scheme, setScheme] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const findSubjects = async () => {
    if (!scheme || !branch || !semester) {
      alert("Please select Scheme, Branch and Semester.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/subjects/vtu?scheme=${scheme}&branch=${branch}&semester=${semester}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to load subjects.");
        return;
      }

      setSubjects(data);
      setSearched(true);

    } catch (error) {
      console.error("Subject fetch error:", error);
      alert("Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subjects-page">

      {/* HEADER */}
      <div className="subjects-header">
        <div>
          <h1>📚 My Subjects</h1>
          <p>
            Select your VTU scheme, branch and semester to get your subjects.
          </p>
        </div>
      </div>

      {/* VTU SETUP */}
      <div className="add-subject-box">

        <h2>🎓 Study Setup</h2>

        <p>
          Select your VTU details and we'll automatically load your subjects.
        </p>

        <div className="task-form-grid">

          {/* SCHEME */}
          <div>
            <label>Scheme</label>

            <select
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
            >
              <option value="">Select Scheme</option>
              <option value="2022">2022 Scheme</option>
              <option value="2021">2021 Scheme</option>
              <option value="2018">2018 Scheme</option>
            </select>
          </div>

          {/* BRANCH */}
          <div>
            <label>Branch</label>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              <option value="CSE">
                Computer Science & Engineering
              </option>
              <option value="ISE">
                Information Science & Engineering
              </option>
              <option value="ECE">
                Electronics & Communication Engineering
              </option>
              <option value="EEE">
                Electrical & Electronics Engineering
              </option>
              <option value="ME">
                Mechanical Engineering
              </option>
              <option value="CV">
                Civil Engineering
              </option>
            </select>
          </div>

          {/* SEMESTER */}
          <div>
            <label>Semester</label>

            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

        </div>

        <button
          className="save-subject-button"
          onClick={findSubjects}
          disabled={loading}
        >
          {loading ? "Loading..." : "🔍 Find My Subjects"}
        </button>

      </div>

      {/* SUBJECTS */}
      {searched && (

        <div className="subjects-section">

          <div className="subjects-header">
            <div>
              <h2>
                📖 Your VTU Subjects
              </h2>

              <p>
                {scheme} Scheme • {branch} • Semester {semester}
              </p>
            </div>
          </div>

          {subjects.length === 0 ? (

            <div className="no-subjects">
              <h2>😕 No subjects found</h2>

              <p>
                We couldn't find subjects for this combination yet.
              </p>
            </div>

          ) : (

            <div className="subjects-grid">

              {subjects.map((subject) => (

                <div
                  className="subject-card"
                  key={subject.id}
                >

                  <div className="subject-card-top">

                    <div className="subject-icon">
                      📚
                    </div>

                    <span>
                      {subject.code}
                    </span>

                  </div>

                  <h2>
                    {subject.name}
                  </h2>

                  <p className="subject-notes">
                    🎓 {subject.code}
                  </p>

                  <div className="subject-actions">

                    {subject.vtu_circle_url && (
                      <a
                        href={subject.vtu_circle_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="open-subject-button"
                      >
                        🌐 VTU Circle
                      </a>
                    )}

                    {subject.pdf_url && (
                      <a
                        href={subject.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="open-subject-button"
                      >
                        📄 Notes / PDF
                      </a>
                    )}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default Subjects;