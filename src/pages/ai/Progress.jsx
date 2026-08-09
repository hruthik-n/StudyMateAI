import { useState } from "react";

const subjects = [
  {
    name: "Machine Learning",
    icon: "🤖",
    progress: 75,
    completed: 9,
    total: 12,
  },
  {
    name: "Full Stack Development",
    icon: "💻",
    progress: 60,
    completed: 6,
    total: 10,
  },
  {
    name: "Internet of Things",
    icon: "🌐",
    progress: 45,
    completed: 5,
    total: 11,
  },
  {
    name: "Data Structures",
    icon: "📚",
    progress: 30,
    completed: 3,
    total: 10,
  },
];

const weeklyData = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 2.5 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 3 },
];

function Progress() {
      const [savedSubjects] = useState(() => {
    const storedSubjects = localStorage.getItem("subjects");

    if (storedSubjects) {
      return JSON.parse(storedSubjects);
    }

    return [];
  });
  const totalProgress = Math.round(
    subjects.reduce(
      (sum, subject) => sum + subject.progress,
      0
    ) / subjects.length
  );

  const maxHours = Math.max(
    ...weeklyData.map((item) => item.hours)
  );

  return (
    <div className="progress-page">

      {/* HEADER */}

      <div className="progress-header">
        <h1>📊 My Progress</h1>
        <p>
          Track your learning journey and see how much you've
          achieved.
        </p>
      </div>

      {/* TOP STAT CARDS */}

      <div className="progress-stat-grid">

        <div className="progress-stat-card">
          <div className="progress-stat-icon">📚</div>

          <div>
            <span>Subjects</span>
            <strong>{savedSubjects.length}</strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">⏱️</div>

          <div>
            <span>Study Hours</span>
            <strong>24h</strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">✅</div>

          <div>
            <span>Tasks Completed</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon">🔥</div>

          <div>
            <span>Study Streak</span>
            <strong>7 Days</strong>
          </div>
        </div>

      </div>

      {/* MAIN GRID */}

      <div className="progress-main-grid">

        {/* OVERALL PROGRESS */}

        <div className="progress-card overall-progress-card">

          <div className="progress-section-title">
            <div>
              <h2>Overall Progress</h2>
              <p>Your learning completion</p>
            </div>
          </div>

          <div className="overall-progress-content">

            <div
              className="overall-progress-circle"
              style={{
                background: `conic-gradient(
                  #5b4ee5 ${totalProgress}%,
                  #ecebff ${totalProgress}%
                )`,
              }}
            >
              <div className="overall-progress-inner">
                <strong>{totalProgress}%</strong>
                <span>Completed</span>
              </div>
            </div>

            <div className="overall-progress-text">
              <h3>You're making good progress! 🎉</h3>

              <p>
                Keep studying consistently to reach your
                learning goals.
              </p>

              <div className="overall-small-stats">

                <div>
                  <strong>23</strong>
                  <span>Topics Done</span>
                </div>

                <div>
                  <strong>20</strong>
                  <span>Remaining</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* QUIZ PERFORMANCE */}

        <div className="progress-card">

          <div className="progress-section-title">
            <div>
              <h2>Quiz Performance</h2>
              <p>Your recent quiz results</p>
            </div>

            <span className="progress-badge">
              Good
            </span>
          </div>

          <div className="quiz-performance-score">
            <strong>78%</strong>
            <span>Average Score</span>
          </div>

          <div className="quiz-performance-list">

            <div>
              <span>Machine Learning</span>
              <strong>85%</strong>
            </div>

            <div>
              <span>Full Stack Development</span>
              <strong>80%</strong>
            </div>

            <div>
              <span>Internet of Things</span>
              <strong>75%</strong>
            </div>

            <div>
              <span>Data Structures</span>
              <strong>70%</strong>
            </div>

          </div>
        </div>

      </div>

      {/* WEEKLY ACTIVITY */}

      <div className="progress-card weekly-progress-card">

        <div className="progress-section-title">
          <div>
            <h2>Weekly Study Activity</h2>
            <p>Your study hours this week</p>
          </div>

          <strong className="weekly-total">
            21 Hours
          </strong>
        </div>

        <div className="weekly-chart">

          {weeklyData.map((item) => (

            <div
              className="weekly-chart-item"
              key={item.day}
            >

              <div className="weekly-bar-area">

                <span className="weekly-hours">
                  {item.hours}h
                </span>

                <div
                  className="weekly-bar"
                  style={{
                    height: `${
                      (item.hours / maxHours) * 100
                    }%`,
                  }}
                />

              </div>

              <span className="weekly-day">
                {item.day}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* SUBJECT PROGRESS */}

      <div className="progress-card subject-progress-section">

        <div className="progress-section-title">
          <div>
            <h2>Subject Progress</h2>
            <p>
              Your progress across all subjects
            </p>
          </div>
        </div>

        <div className="subject-progress-grid">

          {savedSubjects.map((subject) => (

            <div
              className="subject-progress-card"
              key={subject.name}
            >

              <div className="subject-progress-top">

                <div className="subject-progress-icon">
                  {subject.icon}
                </div>

                <div>
                  <h3>{subject.name}</h3>

                  <span>
                    {subject.notes} Notes
                </span>
                </div>

                <strong>
                  {subject.progress}%
                </strong>

              </div>

              <div className="subject-progress-bar">

                <div
                  className="subject-progress-fill"
                  style={{
                    width: `${subject.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="progress-card achievements-section">

        <div className="progress-section-title">
          <div>
            <h2>Achievements</h2>
            <p>
              Keep learning to unlock more achievements.
            </p>
          </div>
        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            <div>🔥</div>
            <h3>7 Day Streak</h3>
            <p>Studied for 7 days continuously</p>
          </div>

          <div className="achievement-card">
            <div>🎯</div>
            <h3>Task Master</h3>
            <p>Completed 10+ study tasks</p>
          </div>

          <div className="achievement-card">
            <div>🧠</div>
            <h3>Quiz Learner</h3>
            <p>Completed your first quiz</p>
          </div>

          <div className="achievement-card locked-achievement">
            <div>🏆</div>
            <h3>Study Champion</h3>
            <p>Complete 50 hours of study</p>
            <span>🔒 Locked</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Progress;