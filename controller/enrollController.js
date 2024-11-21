import Enrollment from "../models/enroll.js";

// Create a new enrollment
export const createEnrollment = async (req, res) => {
  const { course, student} = req.body;

  if (!course || !student) {
    return res.status(400).json({ message: "Course and student are required." });
  }

  try {
    const enrollment = new Enrollment({
      course,
      student,
    });
    const savedEnrollment = await enrollment.save();
    res.status(201).json({ message: "Enrollment created successfully.", savedEnrollment });
  } catch (error) {
    res.status(500).json({ message: "Failed to create enrollment.", error: error.message });
  }
};

// Get all enrollments
export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("course", "name description") // Adjust fields based on your Subject model
      .populate("student", "name email"); // Adjust fields based on your User model
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch enrollments.", error: error.message });
  }
};

// Get enrollment by ID
export const getEnrollmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const enrollment = await Enrollment.findById(id)
      .populate("course", "name description")
      .populate("student","name email");

    if (!enrollment) {
      return res.status(404).json({ message:"Enrollment not found." });
    }

    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({message: "Failed to fetch enrollment.", error: error.message });
  }
};

// Update an enrollment
export const updateEnrollment = async (req, res) => {
  const { id } = req.params;
  const { course, student } = req.body;

  try {
    const updatedEnrollment = await Enrollment.findByIdAndUpdate(
      id,
      { course, student },
      { new: true }
    )
      .populate("course", "name description")
      .populate("student", "name email");

    if (!updatedEnrollment) {
      return res.status(404).json({ message: "Enrollment not found." });
    }

    res.status(200).json({ message:"Enrollment updated successfully.", updatedEnrollment });
  } catch (error) {
    res.status(500).json({message: "Failed to update enrollment.", error: error.message });
  }
};

// Delete an enrollment
export const deleteEnrollment = async (req, res) => {
  const { id} = req.params;

  try {
    const deletedEnrollment = await Enrollment.findByIdAndDelete(id);

    if (!deletedEnrollment) {
      return res.status(404).json({ message: "Enrollment not found." });
    }

    res.status(200).json({ message: "Enrollment deleted successfully." });
  } catch (error) {
    res.status(500).json({message: "Failed to delete enrollment.",error: error.message });
  }
};
