import Subject from '../models/subject.js';
import User from '../models/user.js';

export const createSubject = async (req, res) => {
    try {
        const { name, code, createdBy } = req.body;

        const user = await User.findById(createdBy);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const subject = new Subject({
            name,
            code,
            createdBy
        });

        const savedSubject = await subject.save();
        res.status(201).json({
            message: "Subject created successfully",
            subject: savedSubject
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating subject",
            error: error.message
        });
    }
};

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('createdBy');
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving subjects",
            error: error.message
        });
    }
};
