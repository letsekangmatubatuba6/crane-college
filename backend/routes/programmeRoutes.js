
const express = require("express");
const router = express.Router();

const pool = require("../config/db");

// GET all programmes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM programmes ORDER BY programme_name ASC"
    );

    res.status(200).json({
      status: "success",
      count: result.rows.length,
      programmes: result.rows
    });

  } catch (error) {
    console.error("Error fetching programmes:", error.message);

    res.status(500).json({
      status: "error",
      message: "Unable to retrieve programmes."
    });
  }
});

module.exports = router;
