import Practical from '../models/practical.js';
import Subject from '../models/subject.js';
import User from '../models/user.js';

export const createPractical = async (req, res) => {
    try {
        const { subjectId, title, description, createdBy } = req.body;

        const subject = await Subject.findById(subjectId);
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }

        const practical = new Practical({
            subjectId,
            title,
            description,
            createdBy
        });

        const savedPractical = await practical.save();
        res.status(201).json({
            message: "Practical created successfully",
            practical: savedPractical
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating practical",
            error: error.message
        });
    }
};

export const getAllPracticals = async (req, res) => {
    try {
        const practicals = await Practical.find().populate('subjectId').populate('createdBy').populate('enrolledStudents');
        res.status(200).json(practicals);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving practicals",
            error: error.message
        });
    }
};

export const enrollInPractical = async (req, res) => {
    try {
        const { practicalId, studentId } = req.body;

        const practical = await Practical.findById(practicalId);
        if (!practical) {
            return res.status(404).json({ message: "Practical not found" });
        }

        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        practical.enrolledStudents.push(studentId);
        await practical.save();

        res.status(200).json({
            message: "Enrolled in practical successfully",
            practical
        });
    } catch (error) {
        res.status(500).json({
            message: "Error enrolling in practical",
            error: error.message
        });
    }
};
