function StudyPlan() {
  const tasks = [
    { title: "React Components", done: true },
    { title: "Machine Learning Module 3", done: true },
    { title: "DBMS Revision", done: false },
    { title: "Java Quiz Practice", done: false },
  ];

  return (
    <div className="study-plan">
      <div className="section-header">
        <h2>📅 Today's Study Plan</h2>
        <span>2 / 4 Completed</span>
      </div>

      {tasks.map((task) => (
        <div className="study-task" key={task.title}>
          <input type="checkbox" checked={task.done} readOnly />
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default StudyPlan;