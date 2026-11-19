
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const pool = require("../config/db");
const { adminAuth } = require("../middleware/adminAuth");

const router = express.Router();

// ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required."
      });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "Server authentication is not configured."
      });
    }

    const result = await pool.query(
      `SELECT id, full_name, email, password_hash, role, is_active
       FROM admin_users
       WHERE LOWER(email) = LOWER($1)
       LIMIT 1`,
      [email.trim()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    const admin = result.rows[0];

    if (!admin.is_active) {
      return res.status(403).json({
        success: false,
        message: "This administrator account is inactive."
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        role: admin.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      admin: {
        id: admin.id,
        full_name: admin.full_name,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process administrator login."
    });
  }
});

// GET CURRENT ADMINISTRATOR
router.get("/me", adminAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, role, is_active
       FROM admin_users
       WHERE id = $1`,
      [req.admin.id]
    );

    if (result.rows.length === 0 || !result.rows[0].is_active) {
      return res.status(401).json({
        success: false,
        message: "Administrator account is unavailable."
      });
    }

    return res.json({
      success: true,
      admin: result.rows[0]
    });

  } catch (error) {
    console.error("Admin profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve administrator details."
    });
  }
});



// GET ADMIN DASHBOARD STATISTICS
router.get("/dashboard-stats", adminAuth, async (req, res) => {
  try {
    const [
      applications,
      students,
      programmes,
      staff,
      pendingApplications,
      underReviewApplications,
      approvedApplications,
      rejectedApplications
    ] = await Promise.all([
      pool.query("SELECT COUNT(*) FROM applications"),

      pool.query("SELECT COUNT(*) FROM students"),

      pool.query("SELECT COUNT(*) FROM programmes"),

      pool.query("SELECT COUNT(*) FROM staff"),

      pool.query(
        "SELECT COUNT(*) FROM applications WHERE application_status = 'pending'"
      ),

      pool.query(
        "SELECT COUNT(*) FROM applications WHERE application_status = 'under_review'"
      ),

      pool.query(
        "SELECT COUNT(*) FROM applications WHERE application_status = 'approved'"
      ),

      pool.query(
        "SELECT COUNT(*) FROM applications WHERE application_status = 'rejected'"
      )
    ]);

    return res.status(200).json({
      success: true,
      statistics: {
        totalApplications: Number(applications.rows[0].count),
        totalStudents: Number(students.rows[0].count),
        totalProgrammes: Number(programmes.rows[0].count),
        totalStaff: Number(staff.rows[0].count),

        pendingApplications: Number(pendingApplications.rows[0].count),
        underReviewApplications: Number(underReviewApplications.rows[0].count),
        approvedApplications: Number(approvedApplications.rows[0].count),
        rejectedApplications: Number(rejectedApplications.rows[0].count)
      }
    });

  } catch (error) {
    console.error("Dashboard statistics error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve dashboard statistics."
    });
  }
});



// ==========================================
// GET ALL COLLEGE APPLICATIONS (ADMIN ONLY)
// ==========================================

router.get("/applications", adminAuth, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));
    const offset = (page - 1) * limit;

    const search = (req.query.search || "").trim();
    const status = (req.query.status || "").trim();

    const conditions = [];
    const values = [];

    if (search) {
      values.push(`%${search}%`);
      conditions.push(
        `(applicant_name ILIKE $${values.length}
        OR email ILIKE $${values.length}
        OR phone ILIKE $${values.length})`
      );
    }

    if (status) {
      values.push(status);
      conditions.push(`application_status = $${values.length}`);
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const countResult = await pool.query(
      `SELECT COUNT(*) FROM applications ${whereClause}`,
      values
    );

    const totalApplications = Number(countResult.rows[0].count);

    const applicationsResult = await pool.query(
      `SELECT
        id,
        applicant_name,
        email,
        phone,
        programme_id,
        second_programme_id,
        application_status,
        application_date,
        highest_qualification,
        previous_school,
        qualification_year,
        study_mode,
        entry_year,
        campus
      FROM applications
      ${whereClause}
      ORDER BY application_date DESC NULLS LAST, id DESC
      LIMIT $${values.length + 1}
      OFFSET $${values.length + 2}`,
      [...values, limit, offset]
    );

    return res.status(200).json({
      success: true,
      applications: applicationsResult.rows.map((application) => ({
        ...application,
        reference_number: `CC-${String(application.id).padStart(6, "0")}`
      })),
      pagination: {
        currentPage: page,
        totalApplications,
        totalPages: Math.ceil(totalApplications / limit),
        pageSize: limit
      }
    });

  } catch (error) {
    console.error("Admin applications error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve college applications."
    });
  }
});
// GET FIVE MOST RECENT APPLICATIONS FOR ADMIN DASHBOARD
router.get("/recent-applications", adminAuth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
        id,
        applicant_name,
        programme_id,
        application_status,
        application_date
      FROM applications
      ORDER BY application_date DESC NULLS LAST, id DESC
      LIMIT 5`
    );

    return res.status(200).json({
      success: true,
      applications: result.rows.map((application) => ({
        ...application,
        reference_number: `CC-${String(application.id).padStart(6, "0")}`
      }))
    });

  } catch (error) {
    console.error("Recent applications error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve recent applications."
    });
  }
});

// ==========================================
// GET ONE APPLICATION WITH FULL DETAILS
// ADMIN ONLY
// ==========================================
router.get("/applications/:id", adminAuth, async (req, res) => {
  try {
    const applicationId = Number.parseInt(req.params.id, 10);

    if (!Number.isInteger(applicationId) || applicationId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid application ID."
      });
    }

    const applicationResult = await pool.query(
      "SELECT * FROM applications WHERE id = $1",
      [applicationId]
    );

    if (applicationResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    const [documentsResult, subjectsResult] = await Promise.all([
      pool.query(
        `SELECT
          id,
          application_id,
          document_type,
          original_filename,
          mime_type,
          file_size,
          verification_status,
          uploaded_at
         FROM application_documents
         WHERE application_id = $1
         ORDER BY uploaded_at DESC`,
        [applicationId]
      ),

      pool.query(
        `SELECT
          id,
          application_id,
          examination_body,
          subject_name,
          grade,
          examination_year
         FROM application_subject_results
         WHERE application_id = $1
         ORDER BY examination_year DESC, subject_name ASC`,
        [applicationId]
      )
    ]);

    return res.status(200).json({
      success: true,
      application: {
        ...applicationResult.rows[0],
        reference_number: `CC-${String(applicationId).padStart(6, "0")}`
      },
      documents: documentsResult.rows,
      subjectResults: subjectsResult.rows
    });

  } catch (error) {
    console.error("Application details error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve application details."
    });
  }
});



// UPDATE APPLICATION STATUS AND RECORD AUDIT HISTORY
router.patch("/applications/:id/status", adminAuth, async (req, res) => {
  const client = await pool.connect();

  try {
    const applicationId = Number.parseInt(req.params.id, 10);
    const { application_status, remarks } = req.body;

    const allowedStatuses = [
  "pending",
  "under_review",
  "approved",
  "rejected"
];

    if (!Number.isInteger(applicationId) || applicationId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid application ID."
      });
    }

    if (!allowedStatuses.includes(application_status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status."
      });
    }

    await client.query("BEGIN");

    // 1. Get the application and lock it during the transaction
    const applicationResult = await client.query(
      `SELECT id, applicant_name, application_status
       FROM applications
       WHERE id = $1
       FOR UPDATE`,
      [applicationId]
    );

    if (applicationResult.rows.length === 0) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    const previousStatus =
      applicationResult.rows[0].application_status;

    // 2. Get the logged-in administrator's name
    const adminResult = await client.query(
      `SELECT id, full_name
       FROM admin_users
       WHERE id = $1`,
      [req.admin.id]
    );

    if (adminResult.rows.length === 0) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        success: false,
        message: "Administrator account not found."
      });
    }

    const admin = adminResult.rows[0];

    // Check whether the status has changed
const statusChanged = previousStatus !== application_status;

if (!statusChanged && !remarks?.trim()) {
  await client.query("ROLLBACK");

  return res.status(200).json({
    success: true,
    message: "Application already has this status.",
    application: applicationResult.rows[0]
  });
}

   let updateResult;

if (statusChanged) {
  updateResult = await client.query(
    `UPDATE applications
     SET application_status = $1
     WHERE id = $2
     RETURNING id, applicant_name, application_status`,
    [application_status, applicationId]
  );
} else {
  updateResult = {
    rows: [applicationResult.rows[0]]
  };
}
    // 4. Record the decision in the audit history
    await client.query(
      `INSERT INTO application_status_history
       (
         application_id,
         admin_id,
         admin_name,
         previous_status,
         new_status,
         remarks,
         changed_at
       )
       VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)`,
      [
        applicationId,
        admin.id,
        admin.full_name,
        previousStatus,
        application_status,
        remarks || null
      ]
    );

    // 5. Save both operations together
    await client.query("COMMIT");

    return res.status(200).json({
      success: true,
      message: "Application status and history updated successfully.",
      application: updateResult.rows[0]
    });

  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Update application status error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update application status."
    });

  } finally {
    client.release();
  }
});


// GET APPLICATION STATUS HISTORY
router.get("/applications/:id/history", adminAuth, async (req, res) => {
  try {
    const applicationId = Number.parseInt(req.params.id, 10);

    if (!Number.isInteger(applicationId) || applicationId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid application ID."
      });
    }

    const applicationResult = await pool.query(
      "SELECT id FROM applications WHERE id = $1",
      [applicationId]
    );

    if (applicationResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Application not found."
      });
    }

    const historyResult = await pool.query(
      `SELECT
         id,
         application_id,
         admin_id,
         admin_name,
         previous_status,
         new_status,
         remarks,
         changed_at
       FROM application_status_history
       WHERE application_id = $1
       ORDER BY changed_at DESC`,
      [applicationId]
    );

    return res.status(200).json({
      success: true,
      history: historyResult.rows
    });

  } catch (error) {
    console.error("Get application history error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve application history."
    });
  }
});



module.exports = router;
