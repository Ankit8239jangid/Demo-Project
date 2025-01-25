import { Router } from "express";
import { addReport, getAllAttempts, getAllAttemptsByUser } from "../controllers/reportController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Add report
router.post("/addReport", addReport);

// Get all attempts (POST method because we are likely filtering with request data)
router.post("/getAllAttempts", authMiddleware, getAllAttempts);

// Get all attempts by a specific user (consider changing to GET method with query parameters)
router.get("/getAllAttemptsByUser", authMiddleware, getAllAttemptsByUser);

export default router;
