import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Bike,
  Clock3,
  IndianRupee,
  LogOut,
  MapPin,
  Menu,
  Navigation,
  Star,
  TrendingUp,
  User,
  Wallet,
  X,
} from "lucide-react";

function CaptainDashboard() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [online, setOnline] = useState(true);

  return (
    <div className="dashboard-page">

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
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <X size={20} />
          </button>

        </div>


        <nav className="sidebar-nav">

          <a className="sidebar-link active">
            <Navigation size={18} />
            Dashboard
          </a>

          <a className="sidebar-link">
            <Bell size={18} />
            Ride requests
          </a>

          <a className="sidebar-link">
            <Wallet size={18} />
            Earnings
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
              CAPTAIN DASHBOARD
            </span>

            <h1>
              Good evening, Captain.
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
                Captain
              </span>
            </div>

          </div>

        </header>


        {/* STATUS */}

        <section className="captain-status-card">

          <div>

            <span className="dashboard-eyebrow">
              CAPTAIN STATUS
            </span>

            <h2>
              {online
                ? "You are online"
                : "You are offline"}
            </h2>

            <p>
              {online
                ? "You can receive ride requests from nearby customers."
                : "Go online to start receiving ride requests."}
            </p>

          </div>


          <button
            className={`online-toggle ${
              online ? "online" : ""
            }`}
            onClick={() =>
              setOnline(!online)
            }
          >

            <span></span>

            {online
              ? "ONLINE"
              : "OFFLINE"}

          </button>

        </section>


        {/* STATS */}

        <section className="captain-stats">

          <div className="dashboard-stat">

            <IndianRupee size={20} />

            <div>
              <span>Today's earnings</span>
              <strong>₹1,840</strong>
            </div>

          </div>


          <div className="dashboard-stat">

            <Navigation size={20} />

            <div>
              <span>Today's rides</span>
              <strong>14</strong>
            </div>

          </div>


          <div className="dashboard-stat">

            <Star size={20} />

            <div>
              <span>Rating</span>
              <strong>4.92</strong>
            </div>

          </div>


          <div className="dashboard-stat">

            <TrendingUp size={20} />

            <div>
              <span>This month</span>
              <strong>₹38.4K</strong>
            </div>

          </div>

        </section>


        {/* GRID */}

        <section className="captain-grid">


          {/* RIDE REQUEST */}

          <div className="ride-request-panel">

            <div className="panel-heading">

              <div>

                <span>
                  NEW RIDE REQUEST
                </span>

                <h2>
                  Nearby customer
                </h2>

              </div>

              <div className="request-badge">
                NEW
              </div>

            </div>


            <div className="request-price">

              <span>Estimated fare</span>

              <strong>₹126</strong>

            </div>


            <div className="request-location">

              <div className="request-point">
                <span className="point-dot"></span>

                <div>
                  <small>Pickup</small>
                  <strong>
                    M. Kumaraswamy College
                  </strong>
                </div>
              </div>


              <div className="request-line"></div>


              <div className="request-point">
                <MapPin size={17} />

                <div>
                  <small>Destination</small>
                  <strong>
                    Karur Bus Stand
                  </strong>
                </div>
              </div>

            </div>


            <div className="request-distance">

              <div>
                <Clock3 size={16} />
                <span>12 min</span>
              </div>

              <div>
                <Bike size={16} />
                <span>4.2 km</span>
              </div>

            </div>


            <div className="request-actions">

              <button className="reject-button">
                Reject
              </button>

              <button className="accept-button">
                Accept ride
                <Navigation size={16} />
              </button>

            </div>

          </div>


          {/* MAP */}

          <div className="fake-map captain-map-panel">

            <div className="map-grid"></div>

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>

            <div className="map-route"></div>

            <div className="map-location pickup-marker">
              <span></span>
            </div>

            <div className="map-location destination-marker">
              <MapPin size={20} />
            </div>

            <div className="captain-map-label">
              <span></span>
              Live network
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CaptainDashboard;