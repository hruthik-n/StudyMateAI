import "../styles/dashboard.css";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import QuickTools from "../components/dashboard/QuickTools";
import StudyPlan from "../components/dashboard/StudyPlan";
import ProgressCard from "../components/dashboard/ProgressCard";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-top">
        <WelcomeCard />
        <StatsCard />
      </div>

      <QuickTools />
      <StudyPlan />
      <ProgressCard />
      <RecentActivity />

    </div>
  );
}

export default Dashboard;
<div className="ai-tip">
  <div className="ai-tip-icon">💡</div>

  <div className="ai-tip-content">
    <h2>AI Study Tip</h2>
    <p>
      Review your notes within 24 hours to improve memory and
      remember important concepts for longer.
    </p>
  </div>

  <button className="ai-tip-btn">Got it</button>
</div>