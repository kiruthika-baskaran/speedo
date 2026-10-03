import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./pages/Login";

const vehicles = [
  {
    id: "bike",
    name: "SPEEDO Bike",
    icon: "🏍️",
    price: 89,
    eta: "3 min",
    description: "Quick & affordable",
  },
  {
    id: "auto",
    name: "SPEEDO Auto",
    icon: "🛺",
    price: 129,
    eta: "5 min",
    description: "Comfortable city ride",
  },
  {
    id: "cab",
    name: "SPEEDO Cab",
    icon: "🚕",
    price: 249,
    eta: "7 min",
    description: "Premium comfort",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("customer");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("bike");

  const [rideStatus, setRideStatus] = useState("idle");
  const [activePage, setActivePage] = useState("home");
  const [rating, setRating] = useState(0);

  const selectedVehicle = vehicles.find(
    (item) => item.id === vehicle
  );

  const handleLogin = (role) => {
    setUserRole(role);
    setLoggedIn(true);
    setActivePage("home");
  };

  const logout = () => {
    setLoggedIn(false);
    setUserRole("customer");
    setRideStatus("idle");
    setActivePage("home");
  };

  const bookRide = () => {
    if (!pickup || !destination) {
      alert("Please enter pickup and destination.");
      return;
    }

    setRideStatus("searching");

    setTimeout(() => {
      setRideStatus("found");
    }, 2500);
  };

  const startRide = () => {
    setRideStatus("ongoing");
  };

  const completeRide = () => {
    setRideStatus("completed");
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (userRole === "captain") {
    return (
      <CaptainDashboard
        logout={logout}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    );
  }

  if (userRole === "admin") {
    return (
      <AdminDashboard
        logout={logout}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    );
  }

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="brand">
          SPEED<span>O</span>
        </div>

        <div className="nav-links">

          <button
            className={activePage === "home" ? "nav-active" : ""}
            onClick={() => setActivePage("home")}
          >
            Book Ride
          </button>

          <button
            className={activePage === "history" ? "nav-active" : ""}
            onClick={() => setActivePage("history")}
          >
            My Rides
          </button>

        </div>

        <div className="nav-right">

          <div className="profile-pill">
            <span>👤</span>
            Customer
          </div>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

        </div>

      </nav>

      {/* CUSTOMER HOME */}

      {activePage === "home" && (
        <main>

          <section className="hero-section">

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="eyebrow">
                SMART CITY MOBILITY
              </div>

              <h1>
                Move fast.
                <br />
                <span>Live more.</span>
              </h1>

              <p>
                Book a bike, auto or cab in seconds.
                <br />
                Simple pricing. Reliable rides.
              </p>

            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >

              <div className="hero-circle"></div>

              <div className="hero-bike">
                🏍️
              </div>

            </motion.div>

          </section>

          {/* BOOKING */}

          <section className="booking-section">

            <motion.div
              className="booking-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="card-heading">

                <div>
                  <small>PLAN YOUR RIDE</small>
                  <h2>Where are you going?</h2>
                </div>

                <div className="location-badge">
                  📍 Live
                </div>

              </div>

              <div className="location-inputs">

                <div className="location-line">

                  <div className="location-dot pickup-dot">
                    ●
                  </div>

                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={pickup}
                    onChange={(e) =>
                      setPickup(e.target.value)
                    }
                  />

                </div>

                <div className="connector-line"></div>

                <div className="location-line">

                  <div className="location-dot destination-dot">
                    ●
                  </div>

                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                  />

                </div>

              </div>

              {/* MAP */}

              <div className="fake-map">

                <div className="map-grid"></div>

                <div className="map-road road-one"></div>
                <div className="map-road road-two"></div>
                <div className="map-road road-three"></div>

                <div className="map-marker pickup-marker">
                  📍
                </div>

                <div className="map-marker destination-marker">
                  📍
                </div>

                <div className="map-route"></div>

                <div className="map-label pickup-label">
                  Pickup
                </div>

                <div className="map-label destination-label">
                  Destination
                </div>

              </div>

              {/* VEHICLES */}

              <div className="vehicle-section">

                <div className="section-title">
                  Choose your ride
                </div>

                <div className="vehicle-grid">

                  {vehicles.map((item) => (

                    <motion.button
                      key={item.id}
                      className={`vehicle-card ${
                        vehicle === item.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setVehicle(item.id)
                      }
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >

                      <div className="vehicle-icon">
                        {item.icon}
                      </div>

                      <div className="vehicle-info">

                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          {item.description}
                        </span>

                      </div>

                      <div className="vehicle-price">

                        <strong>
                          ₹{item.price}
                        </strong>

                        <span>
                          {item.eta}
                        </span>

                      </div>

                    </motion.button>

                  ))}

                </div>

              </div>

              {/* FARE */}

              <div className="fare-box">

                <div>
                  <span>Estimated fare</span>
                  <strong>
                    ₹{selectedVehicle.price}
                  </strong>
                </div>

                <div>
                  <span>Arrival</span>
                  <strong>
                    {selectedVehicle.eta}
                  </strong>
                </div>

                <div>
                  <span>Payment</span>
                  <strong>Cash / UPI</strong>
                </div>

              </div>

              <button
                className="book-button"
                onClick={bookRide}
                disabled={
                  rideStatus === "searching" ||
                  rideStatus === "found" ||
                  rideStatus === "ongoing"
                }
              >
                {rideStatus === "searching"
                  ? "Finding Captain..."
                  : rideStatus === "found"
                  ? "Captain Found"
                  : rideStatus === "ongoing"
                  ? "Ride In Progress"
                  : "Book Ride"}
                <span>→</span>
              </button>

            </motion.div>

          </section>

          {/* RIDE STATUS */}

          <AnimatePresence>

            {rideStatus !== "idle" && (

              <motion.section
                className="ride-status-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
              >

                {rideStatus === "searching" && (

                  <div className="status-card searching-card">

                    <div className="loader-circle">
                      <div></div>
                    </div>

                    <h2>
                      Finding your captain...
                    </h2>

                    <p>
                      Searching nearby SPEEDO captains.
                    </p>

                  </div>

                )}

                {rideStatus === "found" && (

                  <div className="status-card">

                    <div className="success-icon">
                      ✓
                    </div>

                    <div className="captain-details">

                      <div>
                        <small>CAPTAIN FOUND</small>
                        <h2>Arun Kumar</h2>
                        <p>
                          ⭐ 4.9 · 1,248 rides
                        </p>
                      </div>

                      <div className="captain-avatar">
                        👨
                      </div>

                    </div>

                    <div className="ride-info-row">

                      <span>
                        {selectedVehicle.icon}
                        {selectedVehicle.name}
                      </span>

                      <strong>
                        ₹{selectedVehicle.price}
                      </strong>

                    </div>

                    <button
                      className="book-button"
                      onClick={startRide}
                    >
                      Start Ride →
                    </button>

                  </div>

                )}

                {rideStatus === "ongoing" && (

                  <div className="status-card">

                    <div className="ongoing-badge">
                      ● RIDE IN PROGRESS
                    </div>

                    <h2>
                      You're on your way!
                    </h2>

                    <div className="trip-route">

                      <div>
                        <span className="route-dot green"></span>
                        <strong>{pickup}</strong>
                      </div>

                      <div className="route-vertical"></div>

                      <div>
                        <span className="route-dot red"></span>
                        <strong>{destination}</strong>
                      </div>

                    </div>

                    <div className="captain-mini">

                      <span>👨</span>

                      <div>
                        <strong>Arun Kumar</strong>
                        <small>Captain · ⭐ 4.9</small>
                      </div>

                      <button>
                        ☎
                      </button>

                    </div>

                    <button
                      className="complete-button"
                      onClick={completeRide}
                    >
                      Complete Ride
                    </button>

                  </div>

                )}

                {rideStatus === "completed" && (

                  <div className="status-card completed-card">

                    <div className="success-icon">
                      ✓
                    </div>

                    <h2>
                      Ride completed!
                    </h2>

                    <p>
                      Thank you for riding with SPEEDO.
                    </p>

                    <div className="completed-fare">
                      ₹{selectedVehicle.price}
                    </div>

                    <div className="rating-area">

                      <small>
                        RATE YOUR CAPTAIN
                      </small>

                      <div className="stars">

                        {[1, 2, 3, 4, 5].map(
                          (star) => (

                            <button
                              key={star}
                              onClick={() =>
                                setRating(star)
                              }
                              className={
                                star <= rating
                                  ? "star-active"
                                  : ""
                              }
                            >
                              ★
                            </button>

                          )
                        )}

                      </div>

                    </div>

                    <button
                      className="book-button"
                      onClick={() => {
                        setRideStatus("idle");
                        setPickup("");
                        setDestination("");
                        setRating(0);
                      }}
                    >
                      Book Another Ride
                    </button>

                  </div>

                )}

              </motion.section>

            )}

          </AnimatePresence>

          {/* FEATURES */}

          <section className="features-section">

            <div className="section-heading">

              <small>WHY SPEEDO</small>

              <h2>
                Designed around your journey.
              </h2>

            </div>

            <div className="feature-grid">

              <div className="feature-card">
                <span>⚡</span>
                <h3>Fast pickup</h3>
                <p>
                  Connect with nearby captains
                  in seconds.
                </p>
              </div>

              <div className="feature-card">
                <span>₹</span>
                <h3>Clear pricing</h3>
                <p>
                  See your estimated fare before
                  booking.
                </p>
              </div>

              <div className="feature-card">
                <span>🛡️</span>
                <h3>Safe rides</h3>
                <p>
                  Verified captains and reliable
                  ride tracking.
                </p>
              </div>

            </div>

          </section>

        </main>
      )}

      {/* HISTORY */}

      {activePage === "history" && (

        <main className="history-page">

          <div className="page-header">

            <small>YOUR ACTIVITY</small>

            <h1>My Rides</h1>

            <p>
              Your recent SPEEDO journeys.
            </p>

          </div>

          <div className="history-list">

            {[
              {
                from: "Karur Bus Stand",
                to: "M. Kumarasamy College",
                vehicle: "🏍️ Bike",
                price: "₹89",
                date: "Today · 4:35 PM",
              },
              {
                from: "Home",
                to: "Karur Railway Station",
                vehicle: "🛺 Auto",
                price: "₹129",
                date: "Yesterday · 8:20 AM",
              },
              {
                from: "Karur Bus Stand",
                to: "Government Hospital",
                vehicle: "🚕 Cab",
                price: "₹249",
                date: "28 Sep · 6:45 PM",
              },
            ].map((ride, index) => (

              <motion.div
                className="history-card"
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >

                <div className="history-icon">
                  {ride.vehicle.split(" ")[0]}
                </div>

                <div className="history-route">

                  <strong>{ride.from}</strong>

                  <span>↓</span>

                  <strong>{ride.to}</strong>

                  <small>{ride.date}</small>

                </div>

                <div className="history-right">

                  <strong>{ride.price}</strong>

                  <span className="completed-label">
                    Completed
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </main>

      )}

      {/* FOOTER */}

      <footer className="footer">

        <div className="brand">
          SPEED<span>O</span>
        </div>

        <p>
          Move fast. Live more.
        </p>

        <span>
          © 2026 SPEEDO Mobility
        </span>

      </footer>

    </div>
  );
}


/* ============================= */
/* CAPTAIN DASHBOARD */
/* ============================= */

function CaptainDashboard({
  logout,
  activePage,
  setActivePage,
}) {
  const [online, setOnline] = useState(true);
  const [request, setRequest] = useState(true);
  const [currentRide, setCurrentRide] = useState(false);

  return (
    <div className="dashboard-app">

      <nav className="dashboard-nav">

        <div className="brand">
          SPEED<span>O</span>
        </div>

        <div className="dashboard-role">
          CAPTAIN
        </div>

        <div className="nav-right">

          <div className="online-pill">
            <span></span>
            {online ? "Online" : "Offline"}
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </nav>

      <main className="dashboard-main">

        <div className="dashboard-header">

          <div>
            <small>CAPTAIN DASHBOARD</small>
            <h1>
              Good evening, Arun.
            </h1>
            <p>
              Manage your rides and earnings.
            </p>
          </div>

          <button
            className={`availability-toggle ${
              online ? "is-online" : ""
            }`}
            onClick={() => setOnline(!online)}
          >
            <span></span>
            {online ? "You're Online" : "You're Offline"}
          </button>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <small>Today's Earnings</small>
            <strong>₹1,840</strong>
            <span>↑ 14% this week</span>
          </div>

          <div className="stat-card">
            <small>Completed Rides</small>
            <strong>12</strong>
            <span>Today</span>
          </div>

          <div className="stat-card">
            <small>Captain Rating</small>
            <strong>4.9 ⭐</strong>
            <span>1,248 total rides</span>
          </div>

          <div className="stat-card">
            <small>Online Hours</small>
            <strong>7.4h</strong>
            <span>Today</span>
          </div>

        </div>

        <div className="dashboard-columns">

          <section className="dashboard-panel">

            <div className="panel-heading">
              <div>
                <small>NEW REQUEST</small>
                <h2>Ride Request</h2>
              </div>

              {request && (
                <span className="new-badge">
                  NEW
                </span>
              )}
            </div>

            {request ? (

              <div className="request-card">

                <div className="request-route">

                  <div>
                    <span className="route-dot green"></span>
                    <strong>Karur Bus Stand</strong>
                  </div>

                  <div className="route-line"></div>

                  <div>
                    <span className="route-dot red"></span>
                    <strong>M. Kumarasamy College</strong>
                  </div>

                </div>

                <div className="request-details">

                  <div>
                    <small>Vehicle</small>
                    <strong>🏍️ Bike</strong>
                  </div>

                  <div>
                    <small>Distance</small>
                    <strong>4.8 km</strong>
                  </div>

                  <div>
                    <small>Fare</small>
                    <strong>₹189</strong>
                  </div>

                </div>

                <div className="request-buttons">

                  <button
                    className="reject-btn"
                    onClick={() =>
                      setRequest(false)
                    }
                  >
                    Reject
                  </button>

                  <button
                    className="accept-btn"
                    onClick={() => {
                      setRequest(false);
                      setCurrentRide(true);
                    }}
                  >
                    Accept Ride →
                  </button>

                </div>

              </div>

            ) : currentRide ? (

              <div className="current-ride-card">

                <div className="ongoing-badge">
                  ● CURRENT RIDE
                </div>

                <h2>
                  Ride in progress
                </h2>

                <p>
                  Customer: Priya Sharma
                </p>

                <div className="request-route">

                  <div>
                    <span className="route-dot green"></span>
                    <strong>Karur Bus Stand</strong>
                  </div>

                  <div className="route-line"></div>

                  <div>
                    <span className="route-dot red"></span>
                    <strong>M. Kumarasamy College</strong>
                  </div>

                </div>

                <button
                  className="accept-btn full"
                  onClick={() => {
                    setCurrentRide(false);
                    setRequest(true);
                  }}
                >
                  Complete Ride
                </button>

              </div>

            ) : (

              <div className="empty-state">
                <div>✓</div>
                <h3>No new requests</h3>
                <p>
                  Stay online to receive new rides.
                </p>
              </div>

            )}

          </section>

          <section className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <small>RECENT ACTIVITY</small>
                <h2>Ride History</h2>
              </div>

              <button className="view-btn">
                View all
              </button>

            </div>

            <div className="activity-list">

              <div className="activity-row">
                <span>🏍️</span>
                <div>
                  <strong>Railway Station</strong>
                  <small>Today · 3:48 PM</small>
                </div>
                <strong>₹156</strong>
              </div>

              <div className="activity-row">
                <span>🛺</span>
                <div>
                  <strong>Bus Stand</strong>
                  <small>Today · 2:20 PM</small>
                </div>
                <strong>₹129</strong>
              </div>

              <div className="activity-row">
                <span>🏍️</span>
                <div>
                  <strong>Government Hospital</strong>
                  <small>Today · 12:45 PM</small>
                </div>
                <strong>₹98</strong>
              </div>

              <div className="activity-row">
                <span>🏍️</span>
                <div>
                  <strong>Thanthonimalai</strong>
                  <small>Today · 10:12 AM</small>
                </div>
                <strong>₹142</strong>
              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}


/* ============================= */
/* ADMIN DASHBOARD */
/* ============================= */

function AdminDashboard({
  logout,
}) {
  return (
    <div className="dashboard-app admin-app">

      <nav className="dashboard-nav">

        <div className="brand">
          SPEED<span>O</span>
        </div>

        <div className="dashboard-role">
          ADMIN
        </div>

        <div className="nav-right">

          <div className="admin-user">
            ◈ Administrator
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </nav>

      <main className="dashboard-main">

        <div className="dashboard-header">

          <div>
            <small>ADMINISTRATION</small>
            <h1>
              SPEEDO Overview
            </h1>
            <p>
              Monitor your mobility network.
            </p>
          </div>

          <div className="date-badge">
            October 2026
          </div>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <small>Total Rides</small>
            <strong>12,842</strong>
            <span>↑ 18.4% this month</span>
          </div>

          <div className="stat-card">
            <small>Active Customers</small>
            <strong>8,421</strong>
            <span>↑ 12.8%</span>
          </div>

          <div className="stat-card">
            <small>Captains</small>
            <strong>1,248</strong>
            <span>892 currently online</span>
          </div>

          <div className="stat-card">
            <small>Today's Revenue</small>
            <strong>₹4.82L</strong>
            <span>↑ 9.6%</span>
          </div>

        </div>

        <div className="admin-grid">

          <section className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <small>LIVE DATA</small>
                <h2>Recent Rides</h2>
              </div>

              <button className="view-btn">
                View all
              </button>

            </div>

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Ride</th>
                    <th>Customer</th>
                    <th>Vehicle</th>
                    <th>Fare</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>#SP-10284</td>
                    <td>Priya S.</td>
                    <td>Bike</td>
                    <td>₹189</td>
                    <td>
                      <span className="table-status completed">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>#SP-10283</td>
                    <td>Rahul K.</td>
                    <td>Auto</td>
                    <td>₹129</td>
                    <td>
                      <span className="table-status ongoing">
                        Ongoing
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>#SP-10282</td>
                    <td>Meena R.</td>
                    <td>Cab</td>
                    <td>₹249</td>
                    <td>
                      <span className="table-status completed">
                        Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>#SP-10281</td>
                    <td>Arun V.</td>
                    <td>Bike</td>
                    <td>₹98</td>
                    <td>
                      <span className="table-status completed">
                        Completed
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          <section className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <small>MANAGEMENT</small>
                <h2>Quick Access</h2>
              </div>

            </div>

            <div className="admin-actions">

              <div>
                <span>👤</span>
                <div>
                  <strong>Customers</strong>
                  <small>8,421 registered</small>
                </div>
                <b>→</b>
              </div>

              <div>
                <span>🏍️</span>
                <div>
                  <strong>Captains</strong>
                  <small>1,248 registered</small>
                </div>
                <b>→</b>
              </div>

              <div>
                <span>🚕</span>
                <div>
                  <strong>Rides</strong>
                  <small>12,842 total</small>
                </div>
                <b>→</b>
              </div>

              <div>
                <span>⚠️</span>
                <div>
                  <strong>Complaints</strong>
                  <small>18 pending</small>
                </div>
                <b>→</b>
              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default App;