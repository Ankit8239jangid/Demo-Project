const router = require("express").Router();
const { register, login, getUserInfo } = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get user info (GET method, as we're fetching data)
router.get('/get-user-info', authMiddleware, getUserInfo);

module.exports = router;
