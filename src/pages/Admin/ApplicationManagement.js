import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApplicationManagement.css";
import API_BASE_URL from "../../api";

function ApplicationManagement() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalApplications: 0,
    totalPages: 0,
    pageSize: 10
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState("");
  const [statusHistory, setStatusHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState("");
  const [decisionRemarks, setDecisionRemarks] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("adminToken");

        if (!token) {
          window.location.href = "/admin/login";
          return;
        }

        const params = new URLSearchParams({
          page: String(page),
          limit: "10",
          search,
          status
        });

        const response = await fetch(
          `${API_BASE_URL}/api/admin/applications?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();

        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");
          window.location.href = "/admin/login";
          return;
        }

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Could not load applications."
          );
        }

        setApplications(data.applications || []);
        setPagination(data.pagination);

      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [page, search, status]);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  const formatStatus = (value) => {
    return (value || "pending")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const statusClass = (value) => {
    const normalised = (value || "pending").toLowerCase();
    return normalised.replace(/\s+/g, "-");
  };

const fetchApplicationHistory = async (applicationId) => {
  try {
    setHistoryLoading(true);
    setHistoryError("");
    setStatusHistory([]);

    const token = localStorage.getItem("adminToken");

    const response = await fetch(
      `${API_BASE_URL}/api/admin/applications/${applicationId}/history`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Unable to load status history.");
    }

    setStatusHistory(data.history || []);

  } catch (error) {
    setHistoryError(error.message);
  } finally {
    setHistoryLoading(false);
  }
};


  const handleViewApplication = async (applicationId) => {
  try {
    setDetailsLoading(true);
    setDetailsError("");
    setSelectedApplication(null);

    const token = localStorage.getItem("adminToken");

    const response = await fetch(
      `${API_BASE_URL}/api/admin/applications/${applicationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
      window.location.href = "/admin/login";
      return;
    }

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Unable to load application.");
    }

    setSelectedApplication(data);

    await fetchApplicationHistory(applicationId);

  } catch (error) {
    setDetailsError(error.message);
  } finally {
    setDetailsLoading(false);
  }
};


const handleUpdateStatus = async (newStatus) => {
  try {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(
      `${API_BASE_URL}/api/admin/applications/${selectedApplication.application.id}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
  application_status: newStatus,
  remarks: decisionRemarks
})
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update status");
    }

    setSelectedApplication((previous) => ({
      ...previous,
      application: {
        ...previous.application,
        application_status: data.application.application_status
      }
    }));
    await fetchApplicationHistory(
  selectedApplication.application.id
);
    setDecisionRemarks("");
    alert("Application status updated successfully!");

  } catch (error) {
    console.error("Status update error:", error);
    alert(error.message);
  }
};


  return (
    <div className="application-management">

      {/* PAGE HEADER */}
      <div className="application-management-header">
        <div>
          <p className="application-management-breadcrumb">
            Admin Portal / Application Management
          </p>

          <h1>Application Management</h1>

          <p>
            Review and manage applications submitted to Crane College.
          </p>
        </div>

        <Link
          to="/admin/dashboard"
          className="application-back-button"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* SUMMARY CARDS */}
      <div className="application-summary-grid">

        <div className="application-summary-card">
          <div className="application-summary-icon">📄</div>
          <div>
            <p>Total Applications</p>
            <h2>{pagination.totalApplications}</h2>
          </div>
        </div>

        <div className="application-summary-card">
          <div className="application-summary-icon">📋</div>
          <div>
            <p>Applications on This Page</p>
            <h2>{applications.length}</h2>
          </div>
        </div>

        <div className="application-summary-card">
          <div className="application-summary-icon">📑</div>
          <div>
            <p>Total Pages</p>
            <h2>{pagination.totalPages || 0}</h2>
          </div>
        </div>

      </div>

      {/* APPLICATION TABLE */}
      <div className="application-management-panel">

        <div className="application-panel-heading">
          <div>
            <h2>Submitted Applications</h2>
            <p>
              Search for applicants and review their application information.
            </p>
          </div>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="application-filter-bar">

          <div className="application-search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search name, email or phone number..."
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>

          <select
            value={status}
            onChange={(event) => handleStatusChange(event.target.value)}
          >
            <option value="">All application statuses</option>
            <option value="pending">Pending</option>
            <option value="under_review">Under Review</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>

        </div>

        {error && (
          <div className="application-error">
            {error}
          </div>
        )}

        {loading ? (
          <div className="application-empty-state">
            Loading applications...
          </div>
        ) : applications.length === 0 ? (
          <div className="application-empty-state">
            <div className="application-empty-icon">📂</div>
            <h3>No applications found</h3>
            <p>
              There are no applications matching your search or filter.
            </p>
          </div>
        ) : (
          <div className="application-table-wrapper">
            <table className="application-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Applicant</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Programme ID</th>
                  <th>Date Submitted</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td className="application-reference">
                      {application.reference_number}
                    </td>

                    <td className="application-applicant-name">
                      {application.applicant_name}
                    </td>

                    <td>{application.email}</td>

                    <td>{application.phone}</td>

                    <td>{application.programme_id || "—"}</td>

                    <td>
                      {formatDate(application.application_date)}
                    </td>

                    <td>
                      <span
                        className={`application-status ${statusClass(
                          application.application_status
                        )}`}
                      >
                        {formatStatus(application.application_status)}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="application-view-button"
                       onClick={() => handleViewApplication(application.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION */}
        <div className="application-pagination">
          <p>
            Showing {applications.length} of{" "}
            {pagination.totalApplications} applications
          </p>

          <div className="application-pagination-controls">
            <button
              type="button"
              disabled={page <= 1 || loading}
              onClick={() => setPage((current) => current - 1)}
            >
              Previous
            </button>

            <span>
              Page {pagination.currentPage || page} of{" "}
              {pagination.totalPages || 1}
            </span>

            <button
              type="button"
              disabled={page >= pagination.totalPages || loading}
              onClick={() => setPage((current) => current + 1)}
            >
              Next
            </button>
          </div>
        </div>

      </div>

      {/* APPLICATION DETAILS MODAL */}
      {/* APPLICATION DETAILS MODAL */}
{detailsLoading && (
  <div className="application-modal-overlay">
    <div className="application-details-modal">
      Loading applicant information...
    </div>
  </div>
)}

{detailsError && (
  <div className="application-error">
    {detailsError}
  </div>
)}

{selectedApplication && (
  <div
    className="application-modal-overlay"
    onClick={() => setSelectedApplication(null)}
  >
    <div
      className="application-details-modal"
      onClick={(event) => event.stopPropagation()}
    >
      {(() => {
        const application = selectedApplication.application;
        const documents = selectedApplication.documents || [];
        const subjects = selectedApplication.subjectResults || [];

        return (
          <>
            <div className="application-modal-header">
              <div>
                <p>Application Review</p>
                <h2>{application.applicant_name}</h2>
                <span>{application.reference_number}</span>
              </div>

              <button
                type="button"
                className="application-modal-close"
                onClick={() => setSelectedApplication(null)}
              >
                ×
              </button>
            </div>

            <h3>Personal Information</h3>

            <div className="application-details-grid">
              <div><span>Email</span><strong>{application.email || "Not provided"}</strong></div>
              <div><span>Phone</span><strong>{application.phone || "Not provided"}</strong></div>
              <div><span>Date of Birth</span><strong>{application.date_of_birth || "Not provided"}</strong></div>
              <div><span>Gender</span><strong>{application.gender || "Not provided"}</strong></div>
              <div><span>Nationality</span><strong>{application.nationality || "Not provided"}</strong></div>
              <div><span>Residential Address</span><strong>{application.residential_address || "Not provided"}</strong></div>
            </div>

            <h3>Next of Kin</h3>

            <div className="application-details-grid">
              <div><span>Name</span><strong>{application.next_of_kin_name || "Not provided"}</strong></div>
              <div><span>Relationship</span><strong>{application.next_of_kin_relationship || "Not provided"}</strong></div>
              <div><span>Phone</span><strong>{application.next_of_kin_phone || "Not provided"}</strong></div>
              <div><span>Email</span><strong>{application.next_of_kin_email || "Not provided"}</strong></div>
              <div><span>Address</span><strong>{application.next_of_kin_address || "Not provided"}</strong></div>
            </div>

            <h3>Academic Information</h3>

            <div className="application-details-grid">
              <div><span>Previous School</span><strong>{application.previous_school || "Not provided"}</strong></div>
              <div><span>Highest Qualification</span><strong>{application.highest_qualification || "Not provided"}</strong></div>
              <div><span>Qualification Year</span><strong>{application.qualification_year || "Not provided"}</strong></div>
              <div><span>Examination Number</span><strong>{application.examination_number || "Not provided"}</strong></div>
              <div><span>First Programme ID</span><strong>{application.programme_id || "Not provided"}</strong></div>
              <div><span>Second Programme ID</span><strong>{application.second_programme_id || "Not provided"}</strong></div>
              <div><span>Study Mode</span><strong>{application.study_mode || "Not provided"}</strong></div>
              <div><span>Entry Year</span><strong>{application.entry_year || "Not provided"}</strong></div>
              <div><span>Campus</span><strong>{application.campus || "Not provided"}</strong></div>
            </div>

            <h3>Examination Results</h3>

            {subjects.length === 0 ? (
              <p className="application-section-empty">
                No examination results have been recorded.
              </p>
            ) : (
              <div className="application-table-wrapper">
                <table className="application-table">
                  <thead>
                    <tr>
                      <th>Examination Body</th>
                      <th>Subject</th>
                      <th>Grade</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject) => (
                      <tr key={subject.id}>
                        <td>{subject.examination_body}</td>
                        <td>{subject.subject_name}</td>
                        <td>{subject.grade}</td>
                        <td>{subject.examination_year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <h3>Supporting Documents</h3>

            {documents.length === 0 ? (
              <p className="application-section-empty">
                No supporting documents have been uploaded.
              </p>
            ) : (
              <div className="application-document-list">
                {documents.map((document) => (
                  <div className="application-document-item" key={document.id}>
                    <div>
                      <strong>{document.document_type}</strong>
                      <p>{document.original_filename}</p>
                      <small>
                        {document.file_size
                          ? `${(Number(document.file_size) / 1024).toFixed(1)} KB`
                          : "File size unavailable"}
                      </small>
                    </div>

                    <span>
                      {document.verification_status || "Not verified"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <h3>Application Information</h3>

            <div className="application-details-grid">
              <div><span>Application Status</span><strong>{application.application_status}</strong></div>
              <div><span>Date Submitted</span><strong>{formatDate(application.application_date)}</strong></div>
              <div><span>Declaration Accepted</span><strong>{application.declaration_accepted ? "Yes" : "No"}</strong></div>
            </div>

{/* LATEST ADMISSIONS DECISION */}
<div className="application-decision-summary">

  <h3>Latest Admissions Decision</h3>

  {statusHistory.length === 0 ? (
    <p>No admissions decision has been recorded yet.</p>
  ) : (
    <>
      <p>
        <strong>Decision:</strong>{" "}
        {formatStatus(statusHistory[0].new_status)}
      </p>

      <p>
        <strong>Administrator:</strong>{" "}
        {statusHistory[0].admin_name || "Unknown"}
      </p>

      <p>
        <strong>Remarks:</strong>{" "}
        {statusHistory[0].remarks || "No remarks provided"}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {statusHistory[0].changed_at
          ? new Date(statusHistory[0].changed_at).toLocaleString("en-GB")
          : "Not available"}
      </p>
    </>
  )}

</div>

<h3>Application Status History</h3>

{historyLoading ? (
  <p className="application-section-empty">
    Loading application history...
  </p>
) : historyError ? (
  <p className="application-error">
    {historyError}
  </p>
) : statusHistory.length === 0 ? (
  <p className="application-section-empty">
    No status changes have been recorded yet.
  </p>
) : (
  <div className="application-table-wrapper">
    <table className="application-table">
      <thead>
        <tr>
          <th>Previous Status</th>
          <th>New Status</th>
          <th>Administrator</th>
          <th>Remarks</th>
          <th>Date Changed</th>
        </tr>
      </thead>

      <tbody>
        {statusHistory.map((record) => (
          <tr key={record.id}>
            <td>{formatStatus(record.previous_status)}</td>
            <td>
              <span className={`application-status ${statusClass(record.new_status)}`}>
                {formatStatus(record.new_status)}
              </span>
            </td>
            <td>{record.admin_name || "Unknown"}</td>
            <td>{record.remarks || "No remarks"}</td>
            <td>
              {record.changed_at
                ? new Date(record.changed_at).toLocaleString("en-GB")
                : "Not available"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

            

            <div className="application-modal-footer">
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
              >
                Close Review
              </button>

<div className="application-decision-actions">
  <h3>Admissions Decision</h3>
  <label htmlFor="decision-remarks">
  Administrator Remarks
</label>

<textarea
  id="decision-remarks"
  placeholder="Enter the reason for this admissions decision..."
  value={decisionRemarks}
  onChange={(event) => setDecisionRemarks(event.target.value)}
  rows="4"
/>

  <button
    type="button"
    onClick={() => handleUpdateStatus("under_review")}
  >
    Mark Under Review
  </button>

  <button type="button" onClick={() => handleUpdateStatus("approved")}>
  Accept Application
</button>

  <button
    type="button"
    onClick={() => handleUpdateStatus("rejected")}
  >
    Reject Application
  </button>
</div>

            </div>
          </>
        );
      })()}
    </div>
  </div>
)}

    </div>
  );
}

export default ApplicationManagement;