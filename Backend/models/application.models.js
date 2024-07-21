import mongoose from "mongoose";
import validator from "validator";
const application = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your Name!"],
      minLength: [3, "Name must contain at least 3 Characters!"],
      maxLength: [30, "Name cannot exceed 30 Characters!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your Email!"],
      validate: [validator.isEmail, "Please provide a valid Email!"],
    },
    phone: {
      type: Number,
      required: [true, "Please enter your Phone Number!"],
    },
    coverLetter: {
      type: String,
      required: [true, "Please enter your Cover Letter!"],
    },
    resume: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
    },
    applicantId: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      role: {
        type: String,
        enum: ["Job Seeker"],
        required: true,
      },
    },

    emplpoyerId: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      role: {
        type: String,
        enum: ["Employer"],
        required: true,
      },
    },
  },
  { timestamps: true }
);
export default mongoose.model("Application", application);
