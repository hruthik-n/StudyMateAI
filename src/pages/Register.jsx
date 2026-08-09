import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    usn: "",
    email: "",
    branch: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
        !formData.username ||
        !formData.usn ||
        !formData.email ||
        !formData.branch ||
        !formData.year ||
        !formData.password ||
        !formData.confirmPassword
    ) {
        alert("Please fill all the details");
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.username,
                email: formData.email,
                password: formData.password,
                usn: formData.usn,
                branch: formData.branch,
                semester: formData.year
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Registration failed");
            return;
        }

        alert("Registration successful! Please login.");

        navigate("/");
    } catch (error) {
        console.error("Registration error:", error);
        alert("Unable to connect to the backend");
    }
};
  return (
    <div className="login-container">
      <div className="login-box register-box">

        <h1>🎓 Create Account</h1>

        <p>Register to start using Study Companion</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            type="text"
            name="usn"
            placeholder="Enter USN"
            value={formData.usn}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          >
            <option value="">Select Branch / Course</option>
            <option value="CSE">CSE</option>
            <option value="ISE">ISE</option>
            <option value="AIML">AI & ML</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Other">Other</option>
          </select>

          <select
    name="year"
    value={formData.year}
    onChange={handleChange}
>
    <option value="">Select Year</option>
    <option value="1">1st Year</option>
    <option value="2">2nd Year</option>
    <option value="3">3rd Year</option>
    <option value="4">4th Year</option>
</select>

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="register-text">
          Already have an account?{" "}
          <span
            className="register-link"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;