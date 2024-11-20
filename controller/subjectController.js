import subjectModel from "../models/subject.js";

export const createSubject = async (req, res) => {
    try {
        const { name, department, credits, instructor, prerequisites } = req.body;

        const subjectObj = new subjectModel({
            name,
            department,
            credits,
            instructor,
            prerequisites,
        });

        const savedSubject = await subjectObj.save();

        res.json({
            savedSubject,
            message: "Subject created successfully",
        });
    } catch (error) {
        res.json({
            error: "An error occurred while creating the subject",
        });
        console.error(error);
    }
};

export const getSubjects = async (req, res) => {
    try {
        const subjects = await subjectModel.find().populate("prerequisites"); // Populate prerequisites for better details
        res.json({
            subjects,
        });
    } catch (error) {
        res.json({
            error: "Cannot fetch subjects",
        });
        console.error(error);
    }
};
