import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter job title"],
      minLength: [3, "Job title must be at least 3 characters"],
      maxLength: [100, "Job title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter job description"],
      minLength: [5, "Job description must be at least 5 characters"],
      maxLength: [500, "Job description cannot exceed 500 characters"],
    },
    category: {
      type: String,
      required: [true, "Please enter job category"],
    },
    country: {
      type: String,
      required: [true, "Please enter job country"],
    },
    city: {
      type: String,
      required: [true, "Please enter job city"],
    },
    location: {
      type: String,
      required: [true, "Please provide location."],
      minLength: [3, "Location must contian at least 3 characters!"],
    },
    fixedSalary: {
      type: Number,
      minLength: [4, "fixed salary must be at least 4 characters"],

      maxLength: [10, "fixed salary cannot exceed 10 characters"],
    },
    salaryFrom: {
      type: Number,
      minLength: [4, "salaryFrom must be at least 4 characters"],

      maxLength: [10, "salaryFrom cannot exceed 10 characters"],
    },
    salaryTo: {
      type: Number,
      minLength: [4, "salaryTo must be at least 4 characters"],

      maxLength: [10, "salaryTo cannot exceed 10 characters"],
    },
    // experience: {
    //   type: String,
    //   required: [true, "Please enter job experience"],
    // },
    expired: {
      type: Boolean,
      default: false,
    },
    jobPostedOn: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
