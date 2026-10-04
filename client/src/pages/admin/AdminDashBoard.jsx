import { Link } from "react-router-dom";
import {
  BarChart3,
  Bell,
  Car,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

function AdminDashboard() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard-page admin-dashboard">

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
            <LayoutDashboard size={18} />
            Overview
          </a>

          <a className="sidebar-link">
            <Users size={18} />
            Customers
          </a>

          <a className="sidebar-link">
            <UserCheck size={18} />
            Captains
          </a>

          <a className="sidebar-link">
            <Car size={18} />
            Rides
          </a>

          <a className="sidebar-link">
            <BarChart3 size={18} />
            Analytics
          </a>

          <a className="sidebar-link">
            <Settings size={18} />
            Settings
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
              ADMIN CONSOLE
            </span>

            <h1>
              Network overview
            </h1>

          </div>


          <div className="profile-mini">

            <div className="profile-avatar">
              A
            </div>

            <div>
              <strong>
                Administrator
              </strong>

              <span>
                Platform Admin
              </span>
            </div>

          </div>

        </header>


        {/* KPI */}

        <section className="admin-kpis">

          <div className="kpi-card">

            <div className="kpi-icon">
              <Car size={19} />
            </div>

            <span>Total rides</span>

            <strong>
              12,480
            </strong>

            <small>
              +14.8% this month
            </small>

          </div>


          <div className="kpi-card">

            <div className="kpi-icon">
              <Users size={19} />
            </div>

            <span>Customers</span>

            <strong>
              8,420
            </strong>

            <small>
              +8.2% this month
            </small>

          </div>


          <div className="kpi-card">

            <div className="kpi-icon">
              <UserCheck size={19} />
            </div>

            <span>Active captains</span>

            <strong>
              524
            </strong>

            <small>
              86% currently online
            </small>

          </div>


          <div className="kpi-card">

            <div className="kpi-icon">
              <CircleDollarSign size={19} />
            </div>

            <span>Revenue</span>

            <strong>
              ₹18.4L
            </strong>

            <small>
              +21.4% this month
            </small>

          </div>

        </section>


        {/* ANALYTICS GRID */}

        <section className="admin-grid">


          {/* CHART */}

          <div className="analytics-panel">

            <div className="panel-heading">

              <div>

                <span>
                  RIDE ACTIVITY
                </span>

                <h2>
                  Weekly rides
                </h2>

              </div>

              <button className="chart-filter">
                Last 7 days
                <ChevronRight size={15} />
              </button>

            </div>


            <div className="chart-area">

              <div className="chart-y-axis">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>


              <div className="bar-chart">

                <div className="chart-grid-lines"></div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "42%",
                    }}
                  ></div>
                  <span>Mon</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "61%",
                    }}
                  ></div>
                  <span>Tue</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "55%",
                    }}
                  ></div>
                  <span>Wed</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "74%",
                    }}
                  ></div>
                  <span>Thu</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "88%",
                    }}
                  ></div>
                  <span>Fri</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "100%",
                    }}
                  ></div>
                  <span>Sat</span>
                </div>

                <div className="bar-column">
                  <div
                    className="bar"
                    style={{
                      height: "69%",
                    }}
                  ></div>
                  <span>Sun</span>
                </div>

              </div>

            </div>

          </div>


          {/* NETWORK */}

          <div className="network-panel">

            <div className="panel-heading">

              <div>

                <span>
                  LIVE NETWORK
                </span>

                <h2>
                  Current status
                </h2>

              </div>

              <div className="live-dot"></div>

            </div>


            <div className="network-number">
              524
              <span>captains online</span>
            </div>


            <div className="network-progress">

              <div className="progress-label">

                <span>Online</span>

                <strong>
                  86%
                </strong>

              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: "86%",
                  }}
                ></div>
              </div>

            </div>


            <div className="network-row">

              <span>
                Active rides
              </span>

              <strong>
                148
              </strong>

            </div>


            <div className="network-row">

              <span>
                Waiting requests
              </span>

              <strong>
                26
              </strong>

            </div>


            <div className="network-row">

              <span>
                Avg. pickup time
              </span>

              <strong>
                4.2 min
              </strong>

            </div>

          </div>

        </section>


        {/* INSIGHTS */}

        <section className="insights-section">

          <div className="insights-header">

            <div>

              <span className="dashboard-eyebrow">
                BUSINESS INTELLIGENCE
              </span>

              <h2>
                Platform insights
              </h2>

            </div>

            <BarChart3 size={22} />

          </div>


          <div className="insights-grid">

            <div className="insight-card">

              <Clock3 size={20} />

              <span>
                Peak ride hour
              </span>

              <strong>
                8:00 AM
              </strong>

              <small>
                Morning demand is highest
              </small>

            </div>


            <div className="insight-card">

              <TrendingUp size={20} />

              <span>
                Avg. fare
              </span>

              <strong>
                ₹148
              </strong>

              <small>
                Across all ride types
              </small>

            </div>


            <div className="insight-card">

              <ShieldCheck size={20} />

              <span>
                Completion rate
              </span>

              <strong>
                94.6%
              </strong>

              <small>
                Completed vs requested rides
              </small>

            </div>


            <div className="insight-card">

              <Bell size={20} />

              <span>
                Pending actions
              </span>

              <strong>
                12
              </strong>

              <small>
                Captain verification requests
              </small>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;