import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String, // e.g., "Computer Science", "mathamtics"
    required: true,
  },
  credits: {
    type: Number, // e.g., 3, 4
    required: true,
  },
  instructor: {
    type: String, // Name of the teacher
    required: true,
  },
  prerequisites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Practical" // Reference 
    },
  ],
});

const subjectModel = mongoose.model("Subject", subjectSchema);
export default subjectModel;
