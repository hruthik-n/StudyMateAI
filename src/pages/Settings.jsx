import { useEffect, useState } from "react";
import "./Settings.css";

function Settings() {
  // Dark Mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Study Reminders
  const [notifications, setNotifications] = useState(true);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Toggle dark mode
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Toggle notifications
  const handleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  // Save profile
  const handleSave = () => {
    alert("Profile changes saved successfully!");
  };

  // Change password
  const handleChangePassword = () => {
    alert("Password change option selected.");
  };

  return (
    <div className="settings-page">

      {/* PAGE TITLE */}
      <h1>⚙️ Settings</h1>

      <p className="settings-subtitle">
        Customize your Study Companion
      </p>

      {/* ================= PROFILE ================= */}
      <div className="settings-card">
        <h2>👤 Profile</h2>

        <div className="setting-row">
          <div>
            <h3>Username</h3>
            <p>Change your display name</p>
          </div>

          <input
            type="text"
            placeholder="Enter username"
          />
        </div>

        <div className="setting-row">
          <div>
            <h3>Email</h3>
            <p>Your registered email</p>
          </div>

          <input
            type="email"
            placeholder="Enter email"
          />
        </div>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>

      {/* ================= APPEARANCE ================= */}
      <div className="settings-card">
        <h2>🎨 Appearance</h2>

        <div className="setting-row">
          <div>
            <h3>Dark Mode</h3>
            <p>
              Switch between light and dark theme
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkMode}
            />

            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <div className="settings-card">
        <h2>🔔 Notifications</h2>

        <div className="setting-row">
          <div>
            <h3>Study Reminders</h3>
            <p>
              Receive reminders about your study tasks
            </p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotifications}
            />

            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* ================= SECURITY ================= */}
      <div className="settings-card">
        <h2>🔒 Security</h2>

        <button
          className="password-btn"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>

    </div>
  );
}

export default Settings;