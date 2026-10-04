import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("customer");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (role === "customer") {
      navigate("/customer");
    }

    if (role === "captain") {
      navigate("/captain");
    }

    if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-visual">

        <Link to="/" className="auth-brand">
          <span className="brand-mark">S</span>
          SPEEDO
        </Link>

        <div className="auth-visual-content">

          <span className="auth-label">
            SMART CITY MOBILITY
          </span>

          <h1>
            Your city.
            <br />
            <span>Your journey.</span>
          </h1>

          <p>
            A smarter way to move through your city.
            One platform for customers, captains
            and urban mobility.
          </p>

        </div>

        <div className="auth-visual-footer">

          <span>MOVE FAST.</span>
          <span>LIVE MORE.</span>

        </div>

      </div>


      <div className="auth-form-area">

        <div className="auth-form-container">

          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            Back to home
          </Link>


          <div className="auth-heading">

            <span className="section-label">
              WELCOME BACK
            </span>

            <h2>
              Sign in to
              <br />
              <span>SPEEDO.</span>
            </h2>

            <p>
              Access your rides, bookings and
              account information.
            </p>

          </div>


          <div className="role-selector">

            <button
              className={
                role === "customer"
                  ? "active"
                  : ""
              }
              onClick={() => setRole("customer")}
              type="button"
            >
              Customer
            </button>

            <button
              className={
                role === "captain"
                  ? "active"
                  : ""
              }
              onClick={() => setRole("captain")}
              type="button"
            >
              Captain
            </button>

            <button
              className={
                role === "admin"
                  ? "active"
                  : ""
              }
              onClick={() => setRole("admin")}
              type="button"
            >
              Admin
            </button>

          </div>


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label>Email address</label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>


            <div className="form-group">

              <div className="password-label-row">

                <label>Password</label>

                <button
                  type="button"
                  className="forgot-button"
                >
                  Forgot password?
                </button>

              </div>


              <div className="password-input">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            <button
              type="submit"
              className="auth-submit"
            >
              Sign in
              <ArrowRight size={18} />
            </button>

          </form>


          <div className="auth-divider">
            <span></span>
            <small>OR</small>
            <span></span>
          </div>


          <div className="auth-register">

            <span>
              Don't have a SPEEDO account?
            </span>

            <Link to="/register">
              Create account
            </Link>

          </div>


          <div className="security-note">

            <ShieldCheck size={17} />

            <span>
              Your information is protected
              with secure authentication.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;