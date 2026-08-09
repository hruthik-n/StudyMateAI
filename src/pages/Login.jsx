import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: username.trim(),
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Login failed");
            return;
        }

        // Save JWT token
        localStorage.setItem("token", data.token);

        // Save user information
        localStorage.setItem("user", JSON.stringify(data.user));

        // Keep your existing login state
        localStorage.setItem("isLoggedIn", "true");

        // Go to dashboard
        navigate("/dashboard");

    } catch (error) {
        console.error("Login error:", error);
        alert("Unable to connect to the backend");
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