const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const db = require("./config/dbConfig");
const userRoute = require("./routes/userRoutes");
const examRoute = require("./routes/examRoutes");
const reportRoute = require("./routes/reportRoutes");
const cors = require("cors"); // Re-enable CORS if needed

const port = process.env.PORT || 5000;

// Enable CORS (if frontend is on a different domain)
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoute);
app.use("/api/exams", examRoute);
app.use("/api/reports", reportRoute);

// Serve static files (for production builds)
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "/frontend/build/index.html"));
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send({ message: "Resource not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(500).send({ message: err.message || "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
