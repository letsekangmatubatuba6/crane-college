
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");

const programmeRoutes = require("./routes/programmeRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const newsRoutes = require("./routes/newsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  }
}));

app.use(express.json());

// API routes
app.use("/api/programmes", programmeRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/students", studentRoutes);

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
