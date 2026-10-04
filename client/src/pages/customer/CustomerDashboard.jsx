import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bike,
  Car,
  Clock3,
  History,
  LogOut,
  MapPin,
  Menu,
  Navigation,
  Star,
  User,
  Wallet,
  X,
} from "lucide-react";

function CustomerDashboard() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [vehicle, setVehicle] = useState("bike");

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside
        className={`dashboard-sidebar ${
          menuOpen ? "sidebar-open" : ""
        }`}
      >

        <div className="sidebar-top">

          <Link to="/" className="sidebar-logo">
            <span className="brand-mark">S</span>
            SPEEDO
          </Link>

          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} />
          </button>

        </div>


        <nav className="sidebar-nav">

          <Link
            to="/customer"
            className="sidebar-link active"
          >
            <Navigation size={18} />
            Book a ride
          </Link>

          <a className="sidebar-link">
            <History size={18} />
            Ride history
          </a>

          <a className="sidebar-link">
            <Wallet size={18} />
            Wallet
          </a>

          <a className="sidebar-link">
            <Star size={18} />
            Ratings
          </a>

          <a className="sidebar-link">
            <User size={18} />
            Profile
          </a>

        </nav>


        <div className="sidebar-bottom">

          <Link to="/" className="sidebar-link">
            <LogOut size={18} />
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <button
            className="mobile-dashboard-menu"
            onClick={() =>
              setMenuOpen(true)
            }
          >
            <Menu size={21} />
          </button>


          <div>

            <span className="dashboard-eyebrow">
              CUSTOMER DASHBOARD
            </span>

            <h1>
              Where are you going?
            </h1>

          </div>


          <div className="profile-mini">

            <div className="profile-avatar">
              K
            </div>

            <div>
              <strong>
                Kiruthika
              </strong>

              <span>
                Customer
              </span>
            </div>

          </div>

        </header>


        <section className="customer-grid">


          {/* BOOKING */}

          <div className="booking-panel">

            <div className="panel-heading">

              <div>

                <span>
                  BOOK YOUR RIDE
                </span>

                <h2>
                  Start your journey
                </h2>

              </div>

              <div className="panel-icon">
                <Navigation size={19} />
              </div>

            </div>


            <div className="dashboard-location">

              <div className="location-indicator pickup"></div>

              <div>

                <span>Pickup</span>

                <strong>
                  Your current location
                </strong>

              </div>

            </div>


            <div className="location-connector"></div>


            <div className="dashboard-location">

              <MapPin
                size={18}
                className="destination-icon"
              />

              <div>

                <span>Destination</span>

                <strong>
                  Enter destination
                </strong>

              </div>

            </div>


            <div className="ride-options">

              <button
                className={`ride-option ${
                  vehicle === "bike"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setVehicle("bike")
                }
              >

                <Bike size={21} />

                <div>
                  <strong>Bike</strong>
                  <span>₹25 onwards</span>
                </div>

              </button>


              <button
                className={`ride-option ${
                  vehicle === "auto"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setVehicle("auto")
                }
              >

                <Car size={21} />

                <div>
                  <strong>Auto</strong>
                  <span>₹40 onwards</span>
                </div>

              </button>


              <button
                className={`ride-option ${
                  vehicle === "cab"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setVehicle("cab")
                }
              >

                <Car size={21} />

                <div>
                  <strong>Cab</strong>
                  <span>₹80 onwards</span>
                </div>

              </button>

            </div>


            <button className="dashboard-primary-button">
              Find a ride
              <Navigation size={17} />
            </button>

          </div>


          {/* MAP */}

          <div className="fake-map dashboard-map">

            <div className="map-grid"></div>

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>

            <div className="map-road road-four"></div>

            <div className="map-route"></div>

            <div className="map-location pickup-marker">
              <span></span>
            </div>

            <div className="map-location destination-marker">
              <MapPin size={20} />
            </div>

            <div className="map-car car-one">
              <Bike size={15} />
            </div>

            <div className="map-car car-two">
              <Car size={15} />
            </div>

            <div className="map-overlay-card">

              <span>NETWORK STATUS</span>

              <strong>
                24 nearby captains
              </strong>

              <small>
                Average pickup: 4 min
              </small>

            </div>

          </div>

        </section>


        {/* STATS */}

        <section className="customer-stats">

          <div className="dashboard-stat">

            <Clock3 size={20} />

            <div>
              <span>Total rides</span>
              <strong>24</strong>
            </div>

          </div>


          <div className="dashboard-stat">

            <Wallet size={20} />

            <div>
              <span>Total spent</span>
              <strong>₹3,840</strong>
            </div>

          </div>


          <div className="dashboard-stat">

            <Star size={20} />

            <div>
              <span>Average rating</span>
              <strong>4.9</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CustomerDashboard;