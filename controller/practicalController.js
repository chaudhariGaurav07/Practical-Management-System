import PracticalModel from "../models/practical.js";
import Subject from "../models/subject.js";

export const createPractical = async (req, res) => {  
  try {  
    const { subject, instructor, description, materials } = req.body;  
    console.log(subject);

    // Find the subject information by name
    const subjectInfo = await Subject.findOne({ name: subject });
    if (!subjectInfo) {
      return res.status(404).json({ message: "Subject not found" });
    }

    // Create a new practical object
    const practicalObj = new PracticalModel({  
      subject: subjectInfo._id,  
      instructor,  
      description,  
      materials,  
    });  
    
    // Save the practical
    const savedPractical = await practicalObj.save();  
    
    // update the subject with a reference to the new practical
    const updatedSubject = await Subject.findByIdAndUpdate(
      subjectInfo._id,
      { $push: { practicals: savedPractical._id } }, // Add practical reference to subject
      { new: true }
    ).populate("practicals").exec();  
    
    res.json({ subject: updatedSubject, practical: savedPractical });  
  } catch (error) {  
    console.error(error);
    res.status(500).json({ message: "Error while adding practical" });
  }  
};  

export const getAllPracticals = async (req, res) => {  
  try {  
    const practicals = await PracticalModel.find().populate("subject"); // Fetch practicals with subject details
    res.json({  
      practicals  
    });  
  } catch (error) {  
    console.error(error);
    return res.status(400).json({ 
      error: "Error while fetching practicals",  
    });  
  }  
};
