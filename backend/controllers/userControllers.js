import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User registration
const register = async (req, res) => {
  try {
    // Check if user already exists
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).send({
        message: "All fields are required.",
        success: false,
      });
    }

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(409).send({
        message: "User already exists.",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({
      message: "User registered successfully.",
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

// User login
const login = async (req, res) => {
  try {
    // Validate input
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Email and password are required.",
        success: false,
      });
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const passwordsMatched = await bcrypt.compare(req.body.password, user.password);
      if (passwordsMatched) {
        const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.status(200).send({
          message: "User logged in successfully",
          data: token,
          success: true,
        });
      } else {
        res.status(401).send({
          message: "Invalid Password",
          success: false,
        });
      }
    } else {
      res.status(404).send({
        message: "User does not exist.",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

// Get user info
const getUserInfo = async (req, res) => {
  try {
    if (!req.body.userid) {
      return res.status(400).send({
        message: "User ID is required.",
        success: false,
      });
    }

    const user = await User.findOne({ _id: req.body.userid });
    if (user) {
      res.status(200).send({
        message: "User Info fetched successfully",
        data: user,
        success: true,
      });
    } else {
      res.status(404).send({
        message: "User not found",
        data: null,
        success: false,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

export { register, login, getUserInfo };
