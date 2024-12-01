import mongoose from "mongoose";
import dotenv from 'dotenv';

// db connection
dotenv.config();

const dbConnect = async () => {
    try {
        const url = process.env.MONGODB_URL;
        if (!url) {
            throw new Error('MONGODB_URL is not defined in file of env');
        }
        
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection failed", error);
    }
};

export default dbConnect;
