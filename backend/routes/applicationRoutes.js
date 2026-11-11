
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// SUBMIT A NEW COLLEGE APPLICATION
router.post("/", async (req, res) => {
  try {
    const {
      applicant_name,
      email,
      phone,
      date_of_birth,
      gender,
      nationality,
      residential_address,
      next_of_kin_name,
      next_of_kin_phone,
      previous_school,
      highest_qualification,
      qualification_year,
      programme_id,
      second_programme_id,
      study_mode,
      message,
      declaration_accepted
    } = req.body;

    // Check required fields
    const requiredFields = [
      applicant_name,
      email,
      phone,
      date_of_birth,
      gender,
      nationality,
      residential_address,
      previous_school,
      highest_qualification,
      qualification_year,
      programme_id,
      study_mode
    ];

    if (requiredFields.some(value => value === undefined || value === null || String(value).trim() === "")) {
      return res.status(400).json({
        status: "error",
        message: "Please complete all required fields."
      });
    }

    if (declaration_accepted !== true) {
      return res.status(400).json({
        status: "error",
        message: "You must accept the applicant declaration."
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        status: "error",
        message: "Please enter a valid email address."
      });
    }

    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(Number(qualification_year)) ||
      Number(qualification_year) < 1950 ||
      Number(qualification_year) > currentYear
    ) {
      return res.status(400).json({
        status: "error",
        message: "Please enter a valid qualification year."
      });
    }

    // Check that the first programme exists
    const firstProgramme = await pool.query(
      "SELECT id FROM programmes WHERE id = $1",
      [programme_id]
    );

    if (firstProgramme.rows.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "The selected programme does not exist."
      });
    }

    // Check the optional second programme
    if (second_programme_id) {
      if (Number(second_programme_id) === Number(programme_id)) {
        return res.status(400).json({
          status: "error",
          message: "Please select a different second-choice programme."
        });
      }

      const secondProgramme = await pool.query(
        "SELECT id FROM programmes WHERE id = $1",
        [second_programme_id]
      );

      if (secondProgramme.rows.length === 0) {
        return res.status(400).json({
          status: "error",
          message: "The second-choice programme does not exist."
        });
      }
    }

    const result = await pool.query(
      `INSERT INTO applications (
        applicant_name,
        email,
        phone,
        date_of_birth,
        gender,
        nationality,
        residential_address,
        next_of_kin_name,
        next_of_kin_phone,
        previous_school,
        highest_qualification,
        qualification_year,
        programme_id,
        second_programme_id,
        study_mode,
        message,
        declaration_accepted
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9,
        $10, $11, $12, $13, $14, $15, $16, $17
      )
      RETURNING id, application_status, application_date`,
      [
        applicant_name.trim(),
        email.trim().toLowerCase(),
        phone.trim(),
        date_of_birth,
        gender,
        nationality.trim(),
        residential_address.trim(),
        next_of_kin_name?.trim() || null,
        next_of_kin_phone?.trim() || null,
        previous_school.trim(),
        highest_qualification.trim(),
        Number(qualification_year),
        Number(programme_id),
        second_programme_id ? Number(second_programme_id) : null,
        study_mode,
        message?.trim() || null,
        true
      ]
    );

    const application = result.rows[0];

    res.status(201).json({
      status: "success",
      message: "Your application has been submitted successfully.",
      application: {
        ...application,
        reference_number: `CC-${String(application.id).padStart(6, "0")}`
      }
    });

  } catch (error) {
    console.error("Application submission error:", error.message);

    res.status(500).json({
      status: "error",
      message: "Unable to submit your application. Please try again."
    });
  }
});

module.exports = router;
