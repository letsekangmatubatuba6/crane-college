
const jwt = require("jsonwebtoken");

// Admin authentication middleware
const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required."
      });
    }

    const token = authHeader.split(" ")[1];

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "Server authentication is not configured."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired login session."
    });
  }
};

// Role authorization middleware
const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.admin || !allowedRoles.includes(req.admin.role)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action."
      });
    }

    next();
  };
};

module.exports = { adminAuth, requireRole };
