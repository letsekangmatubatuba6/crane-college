
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const programmeRoutes = require("./routes/programmeRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());
app.use("/api/programmes", programmeRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/news", newsRoutes);

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Crane College API!"
  });
});

// Backend health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Crane College backend is running."
  });
});

// Database connection test
app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT current_database() AS database_name"
    );

    res.json({
      status: "success",
      message: "Database connected successfully!",
      database: result.rows[0].database_name
    });

  } catch (error) {
    console.error("Database test failed:", error.message);

    res.status(500).json({
      status: "error",
      message: "Database connection failed."
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Crane College API running on port ${PORT}`);
});
