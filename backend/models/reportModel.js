const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      index: true, // Adding index to optimize queries by user
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
      required: true,
      index: true, // Adding index to optimize queries by exam
    },
    result: {
      type: {
        score: {
          type: Number,
          required: true,
        },
        status: {
          type: String,
          enum: ["passed", "failed", "in-progress"], // Example enum for status
          required: true,
        },
        timeTaken: {
          type: Number, // e.g., time in minutes
          required: true,
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reportModel = mongoose.model("reports", reportSchema);
module.exports = reportModel;
