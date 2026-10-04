import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  UserRound,
  Bike,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("customer");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [agree, setAgree] = useState(false);


  const updateField = (field, value) => {

    setForm({
      ...form,
      [field]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!agree) {
      alert(
        "Please accept the terms and conditions."
      );
      return;
    }

    if (role === "customer") {
      navigate("/customer");
    } else {
      navigate("/captain");
    }

  };


  return (
    <div className="auth-page">

      <div className="auth-visual register-visual">

        <Link to="/" className="auth-brand">
          <span className="brand-mark">S</span>
          SPEEDO
        </Link>


        <div className="auth-visual-content">

          <span className="auth-label">
            JOIN THE NETWORK
          </span>

          <h1>
            Start moving.
            <br />
            <span>Start today.</span>
          </h1>

          <p>
            Create your SPEEDO account and
            experience a simpler way to move
            through the city.
          </p>


          <div className="register-features">

            <div>
              <UserRound size={18} />
              <span>Easy account management</span>
            </div>

            <div>
              <Bike size={18} />
              <span>Multiple ride options</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Secure platform</span>
            </div>

          </div>

        </div>


        <div className="auth-visual-footer">

          <span>SMARTER.</span>
          <span>FASTER.</span>

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
              GET STARTED
            </span>

            <h2>
              Create your
              <br />
              <span>SPEEDO account.</span>
            </h2>

            <p>
              Choose your role and join the platform.
            </p>

          </div>


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
              Captain
            </button>

          </div>


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label>Full name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) =>
                  updateField(
                    "name",
                    e.target.value
                  )
                }
                required
              />

            </div>


            <div className="form-group">

              <label>Email address</label>

              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  updateField(
                    "email",
                    e.target.value
                  )
                }
                required
              />

            </div>


            <div className="form-group">

              <label>Phone number</label>

              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) =>
                  updateField(
                    "phone",
                    e.target.value
                  )
                }
                required
              />

            </div>


            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={(e) =>
                  updateField(
                    "password",
                    e.target.value
                  )
                }
                required
              />

            </div>


            <label className="checkbox-row">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) =>
                  setAgree(e.target.checked)
                }
              />

              <span>
                I agree to SPEEDO's terms and
                privacy policy.
              </span>

            </label>


            <button
              type="submit"
              className="auth-submit"
            >
              Create account
              <ArrowRight size={18} />
            </button>

          </form>


          <div className="auth-register">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
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

export default Register;