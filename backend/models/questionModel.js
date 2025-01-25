import mongoose from 'mongoose';
import Exam from './examModel.js';

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    correctOption: {
        type: String,
        required: true
    },
    options: {
        type: Object,
        required: true
    },
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exams",
        required: true
    },
}, {
    timestamps: true
});

// Remove question from the exam's questions array if the question is deleted
questionSchema.post('remove', async function (doc, next) {
    try {
        // Ensure the associated exam exists before performing the update
        const exam = await Exam.findById(doc.exam);
        if (exam) {
            await Exam.updateOne(
                { _id: doc.exam },
                { $pull: { questions: doc._id } }
            );
        }
        next();
    } catch (error) {
        next(error); // Pass error to the next middleware
    }
});

const questionModel = mongoose.model("questions", questionSchema);

export default questionModel;
