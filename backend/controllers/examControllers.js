import Exam from "../models/examModel.js";
import User from "../models/userModel.js";
import Question from '../models/questionModel.js';

const addExam = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userid });
    if (!user.isAdmin) {
      return res.send({
        message: "Cannot add exam. User is not an admin.",
        success: false,
      });
    }

    // Check if exam name already exists
    const examExists = await Exam.findOne({ name: req.body.name });
    if (examExists) {
      return res.send({
        message: "Exam already exists",
        success: false,
      });
    }

    // Create new exam
    const newExam = new Exam(req.body);
    await newExam.save();
    res.send({
      message: "Exam added successfully",
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

const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    if (!exams.length) {
      return res.send({
        message: "No exams to display.",
        data: exams,
        success: false,
      });
    }

    res.send({
      message: "Exams list fetched successfully.",
      data: exams,
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

const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id).populate("questions");
    if (!exam) {
      return res.send({
        message: "Exam does not exist.",
        success: false,
      });
    }

    res.send({
      message: "Exam data fetched successfully.",
      data: exam,
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

// Edit exam by id
const editExam = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userid });
    if (!user.isAdmin) {
      return res.send({
        message: "Cannot Update Exam Details.",
        success: false,
      });
    }

    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.send({
        message: "Exam doesn't exist.",
        success: false,
      });
    }

    // Update exam fields
    exam.name = req.body.name;
    exam.duration = req.body.duration;
    exam.category = req.body.category;
    exam.totalMarks = req.body.totalMarks;
    exam.passingMarks = req.body.passingMarks;
    await exam.save();

    res.send({
      message: "Exam details edited successfully.",
      data: exam,
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

const deleteExam = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userid });
    if (!user.isAdmin) {
      return res.send({
        message: "Cannot Delete Exam.",
        success: false,
      });
    }

    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.send({
        message: "Exam doesn't exist.",
        success: false,
      });
    }

    await exam.remove();
    res.send({
      message: "Selected exam deleted successfully.",
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

const addQuestionToExam = async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    if (!user.isAdmin) {
      return res.send({
        message: "Question cannot be added.",
        success: false,
      });
    }

    // Add question to Questions Collection
    const newQuestion = new Question(req.body);
    const question = await newQuestion.save();

    // Add question to exam
    const exam = await Exam.findById(req.params.id);
    exam.questions.push(question._id);
    await exam.save();

    res.send({
      message: "Question added successfully.",
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

const editQuestionInExam = async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    if (!user.isAdmin) {
      return res.send({
        message: "Question cannot be edited.",
        success: false,
      });
    }

    await Question.findByIdAndUpdate(req.body.questionId, req.body);
    res.send({
      message: "Question edited successfully",
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

const deleteQuestionFromExam = async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    if (!user.isAdmin) {
      return res.send({
        message: "Question cannot be deleted.",
        success: false,
      });
    }

    // Delete question from the questions collection
    const question = await Question.findById(req.body.questionId);
    await question.remove();

    // Remove question from exam
    const exam = await Exam.findById(req.params.id);
    exam.questions = exam.questions.filter(
      (q) => q.toString() !== req.body.questionId
    );
    await exam.save();

    res.send({
      message: "Selected question deleted successfully",
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

export {
  addExam,
  getAllExams,
  getExamById,
  editExam,
  deleteExam,
  addQuestionToExam,
  editQuestionInExam,
  deleteQuestionFromExam,
};
