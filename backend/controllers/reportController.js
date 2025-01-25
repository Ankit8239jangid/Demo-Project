import Report from "../models/reportModel.js";
import Exam from "../models/examModel.js";
import User from "../models/userModel.js";

// Add attempts
export const addReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.send({
      message: "Attempt added successfully",
      data: null,
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

// Get all attempts
export const getAllAttempts = async (req, res) => {
  try {
    const user_admin = await User.findOne({ _id: req.body.userid });
    if (!user_admin) {
      return res.send({
        message: "Admin user not found.",
        data: null,
        success: false,
      });
    }
    
    if (!user_admin.isAdmin) {
      return res.send({
        message: "Cannot Fetch All Attempts.",
        data: null,
        success: false,
      });
    }

    const { examName, userName } = req.body;
    const exam = await Exam.find({
      name: { $regex: examName, $options: "i" }, // Adding case-insensitive regex
    });
    const matchedExamIds = exam.map((exam) => exam._id);

    const user = await User.find({
      name: { $regex: userName, $options: "i" },
    });
    const matchedUserIds = user.map((user) => user._id);

    const reports = await Report.find({
      exam: { $in: matchedExamIds },
      user: { $in: matchedUserIds },
    })
      .populate("exam")
      .populate("user")
      .sort({ createdAt: -1 });

    if (reports && reports.length > 0) {
      return res.send({
        message: "All Attempts fetched successfully.",
        data: reports,
        success: true,
      });
    }

    res.send({
      message: "No Attempts to display.",
      data: null,
      success: false,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};

// Get all attempts by a user
export const getAllAttemptsByUser = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.body.userid })
      .populate("exam")
      .populate("user")
      .sort({ createdAt: -1 });

    if (reports && reports.length > 0) {
      return res.send({
        message: "All Attempts fetched successfully.",
        data: reports,
        success: true,
      });
    }

    res.send({
      message: "No Attempts to display.",
      data: null,
      success: false,
    });
  } catch (error) {
    res.send({
      message: error.message,
      data: error,
      success: false,
    });
  }
};
