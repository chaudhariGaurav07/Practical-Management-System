import User from "../models/user.js";

export const createAdmin = async(req,res) => {
    try {
         console.log("Request body:", req.body); // Debugging
        const {name,email,password} = req.body;
        const user = new User({
            name,
            email,
            password,
            role:"Admin"
        })
        const saveUser = await user.save();

        res.json({
           saveUser,
           message:"user connected succesfully"
        })
    } catch (error) {
        console.log(error)
         error:"error occured"
    }
}