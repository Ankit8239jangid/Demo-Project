import express from 'express';
import {
  addExam,
  getAllExams,
  getExamById,
  editExam,
  deleteExam,
  addQuestionToExam,
  deleteQuestionFromExam,
  editQuestionInExam
} from '../controllers/examControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Add exam
router.post('/addExam', authMiddleware, addExam);

// Get all exams
router.get('/getAllExams', authMiddleware, getAllExams);

// Get exam by ID
router.get('/getExamById/:id', authMiddleware, getExamById);

// Edit exam by ID
router.put('/editExam/:id', authMiddleware, editExam);

// Delete exam by ID
router.delete('/deleteExam/:id', authMiddleware, deleteExam);

// Add question to exam by exam ID
router.post('/addQuestionToExam/:id', authMiddleware, addQuestionToExam);

// Delete question from exam by exam ID and question ID
router.delete('/deleteQuestionFromExam/:examId/:questionId', authMiddleware, deleteQuestionFromExam);

// Edit question in exam by exam ID and question ID
router.put('/editQuestionInExam/:examId/:questionId', authMiddleware, editQuestionInExam);

export default router;
