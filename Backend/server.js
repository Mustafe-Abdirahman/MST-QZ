import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pool from "./config/db.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/quizzes", quizRoutes);

// Test database connection
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Successfully connected to the database!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Quiz Management System API! 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
