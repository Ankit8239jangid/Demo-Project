import { Router } from "express";
import { register, login, getUserInfo } from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get user info (GET method, as we're fetching data)
router.get('/get-user-info', authMiddleware, getUserInfo);

export default router;
