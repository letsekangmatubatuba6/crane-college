
const express = require("express");
const router = express.Router();

const pool = require("../config/db");
const { adminAuth } = require("../middleware/adminAuth");

// =====================================
// GET ALL REGISTERED STUDENTS
// =====================================

router.get("/", adminAuth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        s.id,
        s.student_number,
        s.enrollment_date,
        s.programme_id,
        u.full_name,
        u.email,
        p.programme_name
      FROM students s
      INNER JOIN users u ON s.user_id = u.id
      LEFT JOIN programmes p ON s.programme_id = p.id
      ORDER BY s.id DESC
    `);

    return res.status(200).json({
      success: true,
      total: result.rows.length,
      students: result.rows
    });

  } catch (error) {
    console.error("Get students error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve students."
    });
  }
});


const bcrypt = require("bcryptjs");

// =====================================
// REGISTER NEW STUDENT
// =====================================

router.post("/", adminAuth, async (req, res) => {
  const client = await pool.connect();

  try {
    const {
      full_name,
      email,
      password,
      programme_id,
      enrollment_date
    } = req.body;

    // Validate required fields
    if (
      !full_name?.trim() ||
      !email?.trim() ||
      !password ||
      !programme_id
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, password and programme are required."
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 8 characters."
      });
    }

    await client.query("BEGIN");

    // Check whether email already exists
    const existingUser = await client.query(
      "SELECT id FROM users WHERE LOWER(email) = LOWER($1)",
      [email.trim()]
    );

    if (existingUser.rows.length > 0) {
      await client.query("ROLLBACK");

      return res.status(409).json({
        success: false,
        message: "This email is already registered."
      });
    }

    // Verify selected programme
    const programme = await client.query(
      "SELECT id FROM programmes WHERE id = $1",
      [programme_id]
    );

    if (programme.rows.length === 0) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        success: false,
        message: "Selected programme was not found."
      });
    }

    // Securely hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create student user account
    const userResult = await client.query(
      `INSERT INTO users
       (full_name, email, password_hash, role, created_at)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
       RETURNING id`,
      [
        full_name.trim(),
        email.trim().toLowerCase(),
        hashedPassword,
        "student"
      ]
    );

    const userId = userResult.rows[0].id;

    // Generate student number
    const studentNumber =
      `CC${new Date().getFullYear()}${String(userId).padStart(5, "0")}`;

    // Create student record
    const studentResult = await client.query(
      `INSERT INTO students
       (user_id, student_number, programme_id, enrollment_date)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        userId,
        studentNumber,
        programme_id,
        enrollment_date || new Date().toISOString().slice(0, 10)
      ]
    );

    await client.query("COMMIT");

    return res.status(201).json({
      success: true,
      message: "Student registered successfully.",
      student: studentResult.rows[0]
    });

  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Register student error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to register student."
    });

  } finally {
    client.release();
  }
});
module.exports = router;