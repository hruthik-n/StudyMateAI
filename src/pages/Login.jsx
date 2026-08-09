import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    // No registered account
    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    // Check username and password
    if (
      username.trim() === savedUser.username &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>🎓 Study Companion</h1>

        <p>Welcome back! Please login to continue.</p>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Login button */}
          <button type="submit">
            Login
          </button>

        </form>

        {/* Register */}
        <p className="register-text">
          New to StudyMate?{" "}
          <span
            className="register-link"
            onClick={() => navigate("/register")}
          >
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;