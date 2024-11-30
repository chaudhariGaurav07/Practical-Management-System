import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const dbConnect = async () => {
    try {
        const dbUri = process.env.MONGODB_URL;
        if (!dbUri) {
            throw new Error('MONGODB_URL is not defined in the .env file');
        }
        
        await mongoose.connect(dbUri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection failed", error);
    }
};

export default dbConnect;
