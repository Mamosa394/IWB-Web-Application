import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import robotImage from "/images/ROBOT.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://server-2-43kp.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccessMessage("Login successful! Redirecting to home...");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        setError(
          data.message || "Invalid email or password. Please try again."
        );
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
      console.error("Login request failed:", err);
    }
  };

  return (
    <div className="signup-ui-container">
      {/* Left Panel Container */}
      <div className="left-panel-container">
        <div className="left-panel">
          <div className="robot-container">
            <img src={robotImage} alt="Robot" className="robot-img" />
            <p className="knee-caption">
              YOUR IDEAS START HERE!
              <br />
              LOG IN TO MAKE THEM REAL.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel Container */}
      <div className="right-panel-container">
        <div className="right-panel">
          <div className="signup-form-box">
            <div className="glow-border"></div>
            <h2>Welcome back</h2>
            <p className="login-text">
              Do not have an account? <a href="/signup">Sign Up</a>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="error">{error}</p>}
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}

              <button type="submit" className="signup-btn">
                Login
              </button>

              {/* Classic Sign-In Options */}
              <div className="classic-login">
                <p>Or sign in with</p>
                <div className="icon-row">
                  <img
                    src="/images/Google.png"
                    alt="Google"
                    className="login-icon"
                  />
                  <img
                    src="/images/Facebook.png"
                    alt="Facebook"
                    className="login-icon"
                  />
                  <img
                    src="/images/Github.png"
                    alt="GitHub"
                    className="login-icon"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
