import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
// import connectionDb from "./config/dbConfig.js";
import userRoute from "./routes/userRoutes.js";
import examRoute from "./routes/examRoutes.js";
import reportRoute from "./routes/reportRoutes.js";

dotenv.config();

const app = express();
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
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

// Handle 404 errors
app.use((_, res, next) => {
  res.status(404).send({ message: "Resource not found" });
});

// Global error handler
app.use((err, _, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(500).send({ message: err.message || "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
