import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bike,
  Car,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  Navigation,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-page">

      {/* NAVBAR */}

      <header className="navbar">

        <Link to="/" className="brand">
          <span className="brand-mark">S</span>
          <span>SPEEDO</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a href="#why-speedo" onClick={() => setMenuOpen(false)}>
            Why SPEEDO
          </a>

          <Link
            to="/login"
            className="nav-login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </Link>

        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </header>


      {/* HERO */}

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                SMART URBAN MOBILITY
              </div>

              <h1>
                Move fast.
                <br />
                <span>Live more.</span>
              </h1>

              <p className="hero-description">
                Book bikes, autos and cabs in seconds.
                SPEEDO connects you with reliable rides
                for everyday journeys.
              </p>

              <div className="hero-actions">

                <Link to="/login" className="primary-button">
                  Book a ride
                  <ArrowRight size={18} />
                </Link>

                <Link to="/register" className="secondary-button">
                  Become a captain
                </Link>

              </div>

              <div className="hero-trust">

                <div className="trust-item">
                  <ShieldCheck size={17} />
                  <span>Verified network</span>
                </div>

                <div className="trust-item">
                  <Clock3 size={17} />
                  <span>Fast pickup</span>
                </div>

              </div>

            </motion.div>

          </div>


          {/* BOOKING CARD */}

          <motion.div
            className="hero-booking-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="booking-card">

              <div className="booking-card-header">

                <div>
                  <span className="small-label">
                    QUICK BOOKING
                  </span>

                  <h3>
                    Where are you going?
                  </h3>
                </div>

                <div className="booking-icon">
                  <Navigation size={19} />
                </div>

              </div>


              <div className="location-field">

                <div className="location-dot pickup"></div>

                <div>
                  <span>Pickup location</span>
                  <strong>Your current location</strong>
                </div>

              </div>


              <div className="location-line"></div>


              <div className="location-field">

                <MapPin
                  size={18}
                  className="destination-icon"
                />

                <div>
                  <span>Destination</span>
                  <strong>Where do you want to go?</strong>
                </div>

              </div>


              <div className="vehicle-selection">

                <div className="vehicle-option active">

                  <Bike size={20} />

                  <div>
                    <strong>Bike</strong>
                    <span>From ₹25</span>
                  </div>

                </div>

                <div className="vehicle-option">

                  <Car size={20} />

                  <div>
                    <strong>Auto</strong>
                    <span>From ₹40</span>
                  </div>

                </div>

                <div className="vehicle-option">

                  <Car size={20} />

                  <div>
                    <strong>Cab</strong>
                    <span>From ₹80</span>
                  </div>

                </div>

              </div>


              <Link to="/login" className="booking-button">
                Continue
                <ArrowRight size={17} />
              </Link>

            </div>


            {/* MINI MAP */}

            <div className="hero-map">

              <div className="map-grid"></div>

              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              <div className="map-location pickup-marker">
                <span></span>
              </div>

              <div className="map-location destination-marker">
                <MapPin size={20} />
              </div>

              <div className="map-route"></div>

              <div className="map-label pickup-label">
                Pickup
              </div>

              <div className="map-label destination-label">
                Destination
              </div>

            </div>

          </motion.div>

        </section>


        {/* STATS */}

        <section className="stats-section">

          <div className="stats-grid">

            <div className="stat-item">
              <strong>10K+</strong>
              <span>Rides completed</span>
            </div>

            <div className="stat-item">
              <strong>2K+</strong>
              <span>Happy customers</span>
            </div>

            <div className="stat-item">
              <strong>500+</strong>
              <span>Captains</span>
            </div>

            <div className="stat-item">
              <strong>4.8</strong>
              <span>Average rating</span>
            </div>

          </div>

        </section>


        {/* SERVICES */}

        <section
          className="content-section"
          id="services"
        >

          <div className="section-heading">

            <span className="section-label">
              OUR SERVICES
            </span>

            <h2>
              Choose your way
              <br />
              <span>to move.</span>
            </h2>

            <p>
              From quick bike rides to comfortable cabs,
              choose the option that fits your journey.
            </p>

          </div>


          <div className="services-grid">

            <div className="service-card">

              <div className="service-icon bike-icon">
                <Bike size={25} />
              </div>

              <span className="service-number">
                01
              </span>

              <h3>Bike</h3>

              <p>
                Beat traffic and reach your destination
                quickly with affordable bike rides.
              </p>

              <div className="service-footer">
                <span>From ₹25</span>
                <ChevronRight size={18} />
              </div>

            </div>


            <div className="service-card featured">

              <div className="service-icon">
                <Car size={25} />
              </div>

              <span className="service-number">
                02
              </span>

              <h3>Auto</h3>

              <p>
                A practical everyday option for short
                and medium-distance city travel.
              </p>

              <div className="service-footer">
                <span>From ₹40</span>
                <ChevronRight size={18} />
              </div>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Car size={25} />
              </div>

              <span className="service-number">
                03
              </span>

              <h3>Cab</h3>

              <p>
                Comfortable rides for longer journeys,
                work travel and family trips.
              </p>

              <div className="service-footer">
                <span>From ₹80</span>
                <ChevronRight size={18} />
              </div>

            </div>

          </div>

        </section>


        {/* HOW IT WORKS */}

        <section
          className="content-section light-section"
          id="how-it-works"
        >

          <div className="section-heading center-heading">

            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              Your ride in
              <br />
              <span>three simple steps.</span>
            </h2>

          </div>


          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <Smartphone size={25} />

              <h3>Enter your trip</h3>

              <p>
                Add your pickup and destination
                locations.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <Zap size={25} />

              <h3>Choose a ride</h3>

              <p>
                Select a bike, auto or cab based
                on your needs.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <Navigation size={25} />

              <h3>Enjoy the ride</h3>

              <p>
                Track your ride and reach your
                destination safely.
              </p>

            </div>

          </div>

        </section>


        {/* WHY SPEEDO */}

        <section
          className="content-section"
          id="why-speedo"
        >

          <div className="why-grid">

            <div>

              <span className="section-label">
                WHY SPEEDO
              </span>

              <h2>
                Built around
                <br />
                <span>your journey.</span>
              </h2>

              <p className="why-description">
                SPEEDO is designed to make urban
                transportation simple, transparent
                and accessible.
              </p>

            </div>


            <div className="benefits-grid">

              <div className="benefit-card">

                <ShieldCheck size={22} />

                <h3>Safety first</h3>

                <p>
                  Verified captains and ride information
                  for every journey.
                </p>

              </div>


              <div className="benefit-card">

                <Clock3 size={22} />

                <h3>Save time</h3>

                <p>
                  Find nearby rides and get moving
                  without unnecessary waiting.
                </p>

              </div>


              <div className="benefit-card">

                <Users size={22} />

                <h3>Human network</h3>

                <p>
                  Customers and captains connected
                  through one platform.
                </p>

              </div>


              <div className="benefit-card">

                <Star size={22} />

                <h3>Quality rides</h3>

                <p>
                  Ratings and feedback help maintain
                  a better ride experience.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CAPTAIN CTA */}

        <section className="captain-cta">

          <div>

            <span className="section-label">
              FOR CAPTAINS
            </span>

            <h2>
              Turn your time
              <br />
              into opportunity.
            </h2>

            <p>
              Join the SPEEDO captain network and
              build flexible earning opportunities
              around your schedule.
            </p>

            <Link
              to="/register"
              className="primary-button"
            >
              Join SPEEDO
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="captain-visual">

            <div className="earnings-card">

              <span>THIS WEEK</span>

              <strong>₹12,840</strong>

              <div className="earnings-line">
                <TrendingMini />
              </div>

              <small>
                +18.4% from last week
              </small>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-main">

          <div>

            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">S</span>
              <span>SPEEDO</span>
            </Link>

            <p>
              Smart urban mobility
              <br />
              for everyday life.
            </p>

          </div>


          <div className="footer-links">

            <div>
              <span>PRODUCT</span>
              <Link to="/login">Book a ride</Link>
              <Link to="/register">Become a captain</Link>
            </div>

            <div>
              <span>PLATFORM</span>
              <a href="#services">Services</a>
              <a href="#how-it-works">
                How it works
              </a>
            </div>

            <div>
              <span>ACCOUNT</span>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 SPEEDO. All rights reserved.
          </span>

          <span>
            Move fast. Live more.
          </span>

        </div>

      </footer>

    </div>
  );
}


function TrendingMini() {
  return (
    <svg
      width="100%"
      height="45"
      viewBox="0 0 250 45"
      fill="none"
    >
      <path
        d="M0 38 C25 35 30 30 48 33 C65 36 68 21 88 25 C108 29 110 14 130 19 C148 24 157 8 174 14 C193 20 201 5 220 10 C232 13 240 5 250 3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default Home;