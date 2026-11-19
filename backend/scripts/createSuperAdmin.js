
require("dotenv").config();

const readline = require("readline");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");

const ask = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

const askPassword = () => {
  return new Promise((resolve) => {
    const stdin = process.stdin;

    if (!stdin.isTTY || typeof stdin.setRawMode !== "function") {
      ask("Enter administrator password: ").then(resolve);
      return;
    }

    let password = "";

    process.stdout.write("Enter administrator password (hidden): ");
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    const handleInput = (key) => {
      if (key === "\u0003") {
        stdin.setRawMode(false);
        process.exit();
      }

      if (key === "\r" || key === "\n") {
        stdin.removeListener("data", handleInput);
        stdin.setRawMode(false);
        stdin.pause();
        process.stdout.write("\n");
        resolve(password);
        return;
      }

      if (key === "\u007f" || key === "\b") {
        password = password.slice(0, -1);
      } else {
        password += key;
      }
    };

    stdin.on("data", handleInput);
  });
};

async function createSuperAdmin() {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from your backend .env file.");
    }

    const existingAdmin = await pool.query(
      "SELECT id FROM admin_users WHERE role = 'super_admin' LIMIT 1"
    );

    if (existingAdmin.rows.length > 0) {
      console.log("A Super Administrator already exists.");
      return;
    }

    const fullName = await ask("Enter administrator full name: ");
    const email = await ask("Enter administrator email: ");
    const password = await askPassword();

    if (!fullName || !email || !password) {
      throw new Error("All fields are required.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    if (password.length < 12) {
      throw new Error("Password must contain at least 12 characters.");
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await pool.query(
      `INSERT INTO admin_users
       (full_name, email, password_hash, role, is_active)
       VALUES ($1, $2, $3, 'super_admin', TRUE)`,
      [fullName, email, passwordHash]
    );

    console.log("\nSuper Administrator created successfully.");
    console.log("You can now use these login details on the admin login page.");
  } catch (error) {
    console.error("\nSetup error:", error.message);
  } finally {
    await pool.end();
  }
}

createSuperAdmin();
