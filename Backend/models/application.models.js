import mongoose from "mongoose";

const application = new mongoose.Schema({}, { timestamps: true });
export default mongoose.model("Application", application);
