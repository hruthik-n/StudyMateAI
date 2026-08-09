import { useEffect, useState } from "react";

function Focus() {
  const modes = {
    focus: {
      label: "Focus",
      minutes: 25,
      emoji: "🎯",
    },
    short: {
      label: "Short Break",
      minutes: 5,
      emoji: "☕",
    },
    long: {
      label: "Long Break",
      minutes: 15,
      emoji: "🌴",
    },
  };

  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(
    modes.focus.minutes * 60
  );
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((previousTime) => previousTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      if (mode === "focus") {
        setSessions((previous) => previous + 1);
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const changeMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(modes[newMode].minutes * 60);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[mode].minutes * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const totalSeconds = modes[mode].minutes * 60;

  const progress =
    ((totalSeconds - timeLeft) / totalSeconds) * 100;

  return (
    <div className="focus-page">
      <div className="focus-header">
        <h1>⏱️ Focus</h1>
        <p>
          Stay focused, avoid distractions and make every
          study session count.
        </p>
      </div>

      <div className="focus-container">
        <div className="focus-mode-buttons">
          <button
            className={mode === "focus" ? "active-mode" : ""}
            onClick={() => changeMode("focus")}
          >
            🎯 Focus
          </button>

          <button
            className={mode === "short" ? "active-mode" : ""}
            onClick={() => changeMode("short")}
          >
            ☕ Short Break
          </button>

          <button
            className={mode === "long" ? "active-mode" : ""}
            onClick={() => changeMode("long")}
          >
            🌴 Long Break
          </button>
        </div>

        <div className="focus-timer-card">
          <div className="timer-label">
            {modes[mode].emoji} {modes[mode].label}
          </div>

          <div
            className="timer-circle"
            style={{
              background: `conic-gradient(
                #5b4ee5 ${progress}%,
                #ecebff ${progress}%
              )`,
            }}
          >
            <div className="timer-circle-inner">
              <div className="timer-time">
                {formatTime(timeLeft)}
              </div>

              <div className="timer-status">
                {isRunning
                  ? "Stay focused..."
                  : mode === "focus"
                  ? "Ready to focus?"
                  : "Take a break"}
              </div>
            </div>
          </div>

          <div className="timer-controls">
            <button
              className="reset-timer-button"
              onClick={resetTimer}
            >
              ↻ Reset
            </button>

            <button
              className="start-timer-button"
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? "⏸ Pause" : "▶ Start"}
            </button>
          </div>

          <p className="timer-tip">
            💡 Tip: Put your phone away and focus on one task
            during your session.
          </p>
        </div>

        <div className="focus-stats">
          <div className="focus-stat-card">
            <div className="focus-stat-icon">🔥</div>

            <div>
              <span>Focus Sessions</span>
              <strong>{sessions}</strong>
            </div>
          </div>

          <div className="focus-stat-card">
            <div className="focus-stat-icon">⏱️</div>

            <div>
              <span>Focus Time</span>
              <strong>{sessions * 25} min</strong>
            </div>
          </div>

          <div className="focus-stat-card">
            <div className="focus-stat-icon">🏆</div>

            <div>
              <span>Today's Goal</span>
              <strong>{sessions}/4</strong>
            </div>
          </div>
        </div>

        <div className="focus-info-card">
          <div className="focus-info-icon">🧠</div>

          <div>
            <h3>What is the Pomodoro Technique?</h3>

            <p>
              Study with full concentration for 25 minutes,
              then take a 5-minute break. After completing
              four focus sessions, take a longer 15-minute
              break.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;