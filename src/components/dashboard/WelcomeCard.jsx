function WelcomeCard() {
  return (
    <div className="welcome-card">
      <div className="welcome-content">
        <span className="badge">🤖 AI Powered</span>

        <h1>Welcome to StudyMate AI 👋</h1>

        <p>
          Learn smarter, stay organized, and achieve your study goals
          with AI-powered tools designed for students.
        </p>

        <div className="welcome-buttons">
          <button className="primary-btn">
            🚀 Continue Learning
          </button>

          <button className="secondary-btn">
            📅 View Planner
          </button>
        </div>
      </div>

      <div className="welcome-robot">
        🤖
      </div>
    </div>
  );
}

export default WelcomeCard;