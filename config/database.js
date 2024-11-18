// imports the mongoose package from the node_modules
import mongoose from "mongoose";

// database connectivity
const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connect successfuly");
    }catch(error){
        console.log("connenction failed", error)
    }
    
}

// exports this function as the default export so it can be imported elsewhere in the project
export default dbConnect;