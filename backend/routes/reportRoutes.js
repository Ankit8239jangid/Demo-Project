const router = require("express").Router();
const { addReport, getAllAttempts, getAllAttemptsByUser } = require("../controllers/reportController");
const authMiddleware = require("../middlewares/authMiddleware");

// Add report
router.post("/addReport", authMiddleware, addReport);

// Get all attempts (POST method because we are likely filtering with request data)
router.post("/getAllAttempts", authMiddleware, getAllAttempts);

// Get all attempts by a specific user (consider changing to GET method with query parameters)
router.get("/getAllAttemptsByUser", authMiddleware, getAllAttemptsByUser);

module.exports = router;
