import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import API_BASE_URL from "../../api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function AdminDashboard() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("adminUser") || "{}");
  const [statistics, setStatistics] = useState({
  totalApplications: 0,
  totalStudents: 0,
  totalProgrammes: 0,
  totalStaff: 0,
  pendingApplications: 0,
  underReviewApplications: 0,
  approvedApplications: 0,
  rejectedApplications: 0
});
    const admissionsData = [
  { name: "Pending", value: statistics.pendingApplications },
  { name: "Under Review", value: statistics.underReviewApplications },
  { name: "Approved", value: statistics.approvedApplications },
  { name: "Rejected", value: statistics.rejectedApplications }
];

const admissionsColors = [
  "#f59e0b",
  "#3b82f6",
  "#16a34a",
  "#dc2626"
];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recentApplications, setRecentApplications] = useState([]);
  const [recentApplicationsLoading, setRecentApplicationsLoading] = useState(true);
  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", { replace: true });
        return;
      }

      try {
        const response = await fetch(
         `${API_BASE_URL}/api/admin/dashboard-stats`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");
          navigate("/admin/login", { replace: true });
          return;
        }

        if (!response.ok) {
          throw new Error(data.message || "Unable to load dashboard.");
        }

        setStatistics(data.statistics);
        const recentResponse = await fetch(
  `${API_BASE_URL}/api/admin/recent-applications`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

const recentData = await recentResponse.json();

if (!recentResponse.ok) {
  throw new Error(
    recentData.message || "Unable to load recent applications."
  );
}

setRecentApplications(recentData.applications || []);
      } catch (err) {
        setError(err.message || "Unable to connect to the server.");
      } finally {
  setLoading(false);
  setRecentApplicationsLoading(false);
}
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-dashboard">

      <aside className="admin-sidebar">

        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo">CC</div>

          <div>
            <strong>CRANE COLLEGE</strong>
            <small>ADMINISTRATION</small>
          </div>
        </div>

        
<nav className="admin-sidebar-nav">

  <Link to="/admin/dashboard" className="admin-nav-link">
    Dashboard
  </Link>

  <Link to="/admin/admissions" className="admin-nav-link">
    Admissions
  </Link>

  <Link to="/admin/application-management" className="admin-nav-link">
    Application Management
  </Link>

  <Link to="/admin/students" className="admin-nav-link">
    Students
  </Link>

  <Link to="/admin/programmes" className="admin-nav-link">
    Programmes
  </Link>

  <Link to="/admin/staff" className="admin-nav-link">
    Staff
  </Link>

  <Link to="/admin/news" className="admin-nav-link">
    News & Updates
  </Link>

  <Link to="/admin/reports" className="admin-nav-link">
    Reports
  </Link>

  <Link to="/admin/settings" className="admin-nav-link">
    Settings
  </Link>

</nav>


        <button className="admin-logout" onClick={handleLogout}>
          Sign Out
        </button>

      </aside>

      <main className="admin-dashboard-main">

        <header className="admin-dashboard-header">

          <div>
            <h1>Dashboard</h1>
            <p>Crane College Administration System</p>
          </div>

          <div className="admin-profile">

            <div className="admin-avatar">
              {(admin.full_name || "Admin").charAt(0).toUpperCase()}
            </div>

            <div>
              <strong>{admin.full_name || "Administrator"}</strong>
              <small>
                {(admin.role || "Administrator").replaceAll("_", " ")}
              </small>
            </div>

          </div>

        </header>

        <section className="admin-welcome">
          <h2>Welcome to Crane College Administration</h2>

          <p>
            Manage college admissions, students, programmes, staff and
            institutional information from one central system.
          </p>
        </section>

        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        <section className="admin-stat-grid">

          <div className="admin-stat-card">
            <span>Total Applications</span>
            <h2>{loading ? "..." : statistics.totalApplications}</h2>
            <small>Applications received</small>
          </div>

          <div className="admin-stat-card">
            <span>Registered Students</span>
            <h2>{loading ? "..." : statistics.totalStudents}</h2>
            <small>Student records</small>
          </div>

          <div className="admin-stat-card">
            <span>Academic Programmes</span>
            <h2>{loading ? "..." : statistics.totalProgrammes}</h2>
            <small>Available programmes</small>
          </div>

          <div className="admin-stat-card">
            <span>College Staff</span>
            <h2>{loading ? "..." : statistics.totalStaff}</h2>
            <small>Staff records</small>
          </div>

        </section>
                <section className="admin-stat-grid">

          <div className="admin-stat-card">
            <span>Pending Applications</span>
            <h2>{loading ? "..." : statistics.pendingApplications}</h2>
            <small>Awaiting review</small>
          </div>

          <div className="admin-stat-card">
            <span>Under Review</span>
            <h2>{loading ? "..." : statistics.underReviewApplications}</h2>
            <small>Currently being reviewed</small>
          </div>

          <div className="admin-stat-card">
            <span>Approved Applications</span>
            <h2>{loading ? "..." : statistics.approvedApplications}</h2>
            <small>Successfully approved</small>
          </div>

          <div className="admin-stat-card">
            <span>Rejected Applications</span>
            <h2>{loading ? "..." : statistics.rejectedApplications}</h2>
            <small>Unsuccessful applications</small>
          </div>

        </section>
        <section className="admin-admissions-chart">

  <div className="admin-chart-header">
    <div>
      <h2>Admissions Overview</h2>
      <p>Application status distribution</p>
    </div>
  </div>

  {loading ? (
    <p>Loading admissions data...</p>
  ) : (
    <div className="admin-chart-container">

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={admissionsData}
            cx="50%"
            cy="50%"
            outerRadius={105}
            dataKey="value"
            nameKey="name"
            label
          >
            {admissionsData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={admissionsColors[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )}

</section>
<section className="admin-recent-applications">

  <div className="admin-recent-header">
    <div>
      <h2>Recent Applications</h2>
      <p>The five latest college applications</p>
    </div>

    <button
      type="button"
      onClick={() => navigate("/admin/application-management")}
    >
      View All Applications
    </button>
  </div>

  {recentApplicationsLoading ? (
    <p>Loading recent applications...</p>
  ) : recentApplications.length === 0 ? (
    <p>No applications have been received yet.</p>
  ) : (
    <div className="admin-recent-table-wrapper">
      <table className="admin-recent-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Applicant</th>
            <th>Programme ID</th>
            <th>Application Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {recentApplications.map((application) => (
            <tr key={application.id}>
              <td>{application.reference_number}</td>
              <td>{application.applicant_name}</td>
              <td>{application.programme_id || "Not assigned"}</td>
              <td>
                {application.application_date
                  ? new Date(application.application_date).toLocaleDateString("en-GB")
                  : "Not available"}
              </td>
              <td>
                <span className={`admin-status-badge ${application.application_status}`}>
                  {(application.application_status || "pending")
                    .replaceAll("_", " ")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}

</section>

        <section className="admin-dashboard-content">
          <h2>Administration Overview</h2>

          <p>
            Your dashboard is connected to the Crane College database.
            Use the administration sections to manage college records.
          </p>
        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;
