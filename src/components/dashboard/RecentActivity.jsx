function RecentActivity() {
  const activities = [
    "📄 Generated Smart Notes",
    "🧠 Completed AI Quiz",
    "📅 Updated Study Planner",
    "🤖 Asked AI Tutor a Question",
  ];

  return (
    <div className="recent-activity">
      <h2>🔥 Recent Activity</h2>

      {activities.map((activity, index) => (
        <div className="activity-item" key={index}>
          {activity}
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;