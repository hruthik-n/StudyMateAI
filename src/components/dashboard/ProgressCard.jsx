function ProgressCard() {
  return (
    <div className="progress-card">
      <h2>📈 Weekly Progress</h2>

      <p>80% of your weekly goal completed</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="progress-info">
        <span>16 Hours Studied</span>
        <span>Goal: 20 Hours</span>
      </div>
    </div>
  );
}

export default ProgressCard;