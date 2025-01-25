import mongoose from "mongoose";
import Report from "./reportModel.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Delete reports of the user when a user is deleted
userSchema.post("remove", async function (doc, next) {
  try {
    await Report.deleteMany({ user: this._id });
    next(); // ensure the next middleware is called after deletion
  } catch (error) {
    next(error); // pass error to the next middleware (error handler)
  }
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
