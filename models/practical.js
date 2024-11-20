import mongoose from "mongoose";

const practicalSchema = mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject", // Reference to the Subject model
    required: true,
  },
  instructor: {
    type: String, // Name of the instructor overseeing the practical
    required: true,
  },
  description: {
    type: String, //  description of the practical
    required: true,
  },
  materials: [
    {
      type: String, // List of material names or URLs (PDFs, videos)
    },
  ],
});

const practicalModel = mongoose.model("Practical", practicalSchema);
export default practicalModel;
