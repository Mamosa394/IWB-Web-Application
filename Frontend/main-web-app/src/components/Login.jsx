import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import robotImage from "/images/ROBOT.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminCode: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCount, setAdminCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminCount = async () => {
      try {
        const response = await fetch("https://your-api-url/api/admin-count");
        const data = await response.json();
        setAdminCount(data.count);
      } catch (err) {
        console.error("Error fetching admin count:", err);
      }
    };

    fetchAdminCount();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, adminCode } = formData;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("https://your-api-url/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccessMessage("Login successful! Redirecting to home...");

        if (data.isAdmin) {
          setIsAdmin(true);
        }

        setTimeout(() => {
          navigate("/home-page");
        }, 1500);
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
    }
  };

  const handleAdminCodeSubmit = async () => {
    const { adminCode } = formData;

    if (adminCode !== "admin123") {
      setError("Invalid admin code.");
      return;
    }

    setSuccessMessage("Admin login successful!");
    setTimeout(() => {
      navigate("/admin-dashboard");
    }, 1500);
  };

  return (
    <div className="login-page-body">
      <div className="login-page-container">
        <div className="login-page-left-panel-container">
          <div className="login-page-left-panel">
            <div className="login-page-robot-container">
              <img
                src={robotImage}
                alt="Robot"
                className="login-page-robot-img"
              />
              <p className="login-page-knee-caption">
                YOUR IDEAS START HERE!
                <br />
                LOG IN TO MAKE THEM REAL.
              </p>
            </div>
          </div>
        </div>

        <div className="login-page-right-panel-container">
          <div className="login-page-right-panel">
            <div className="login-page-signup-form-box">
              <div className="login-page-glow-border"></div>
              <h2>Welcome back</h2>
              <p className="login-page-login-text">
                Do not have an account? <a href="/signup">Sign Up</a>
              </p>

              <form onSubmit={handleSubmit}>
                <div className="login-page-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="login-page-input-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && <p className="login-page-error">{error}</p>}
                {successMessage && (
                  <p className="login-page-success-message">{successMessage}</p>
                )}

                <button type="submit" className="login-page-signup-btn">
                  Login
                </button>

                {isAdmin && adminCount < 3 && (
                  <div className="login-page-input-wrapper admin-code">
                    <input
                      type="text"
                      name="adminCode"
                      placeholder="Enter Admin Code"
                      value={formData.adminCode}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={handleAdminCodeSubmit}
                      className="login-page-admin-btn"
                    >
                      Submit Admin Code
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
