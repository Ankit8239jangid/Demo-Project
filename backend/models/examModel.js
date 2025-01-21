const mongoose = require('mongoose');
const Question = require("./questionModel");

const examSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    passingMarks: {
        type: Number,
        required: true
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "questions"
    },
}, {
    timestamps: true
});

// Remove all the questions associated with an exam if that exam is deleted
examSchema.post('findOneAndDelete', async function (doc, next) {
    if (doc) {
        await Question.deleteMany({ exam: doc._id });
    }
    next();
});

const examModel = mongoose.model("exams", examSchema);

module.exports = examModel;
