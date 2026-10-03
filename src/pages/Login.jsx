import { motion } from "framer-motion";
import { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    onLogin(role);
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}

      <motion.div
        className="login-visual"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <div className="login-visual-content">

          <div className="login-brand">
            SPEED<span>O</span>
          </div>

          <div className="login-visual-text">

            <div className="eyebrow">
              SMART CITY MOBILITY
            </div>

            <h1>
              Your city.
              <br />
              <span>Your journey.</span>
            </h1>

            <p>
              Fast rides. Clear pricing.
              <br />
              One simple experience.
            </p>

          </div>

          <div className="ride-visual">

            <div className="road-glow"></div>

            <motion.div
              className="floating-route"
              animate={{
                x: [0, 25, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>●</span>
              <div></div>
              <span>●</span>
            </motion.div>

            <div className="vehicle-visual">
              🏍️
            </div>

          </div>

          <div className="login-footer-text">
            <span>FAST</span>
            <span>SAFE</span>
            <span>SIMPLE</span>
          </div>

        </div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="login-form-area"
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <div className="login-form-container">

          <div className="mobile-logo">
            SPEED<span>O</span>
          </div>

          <div className="form-heading">

            <small>
              WELCOME BACK
            </small>

            <h2>
              Sign in to SPEEDO.
            </h2>

            <p>
              Choose your account and continue.
            </p>

          </div>

          {/* ROLE */}

          <div className="role-selector">

            <button
              type="button"
              className={
                role === "customer"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("customer")
              }
            >
              <span>👤</span>
              Customer
            </button>

            <button
              type="button"
              className={
                role === "captain"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("captain")
              }
            >
              <span>🏍️</span>
              Captain
            </button>

            <button
              type="button"
              className={
                role === "admin"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setRole("admin")
              }
            >
              <span>◈</span>
              Admin
            </button>

          </div>

          {/* FORM */}

          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                Email address
              </label>

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="form-group">

              <div className="password-label">

                <label>
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-btn"
                >
                  Forgot?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            <button
              className="login-submit"
              type="submit"
            >
              Continue
              <span>→</span>
            </button>

          </form>

          <div className="login-divider">
            <span>DEMO PROJECT</span>
          </div>

          <p className="demo-note">
            Authentication is currently simulated
            for the SPEEDO project prototype.
          </p>

          <div className="security-note">
            <span>●</span>
            Your information stays secure.
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default Login;