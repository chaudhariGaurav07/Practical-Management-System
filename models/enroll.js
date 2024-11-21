import mongoose from "mongoose";

const enrollmentSchema = mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject", // Reference to the Course model
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model (student)
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now, // Automatically set the enrollment date
  },
});

const enrollmentModel = mongoose.model("Enrollment", enrollmentSchema);
export default enrollmentModel;