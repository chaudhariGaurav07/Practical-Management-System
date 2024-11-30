import User from '../models/user.js';
export const isAdmin=async(req,res,next)=>{  
    try{  
    const {email}=req.body;  
    const user=await User.findOne({email});  
  
    if(user && user.role==='Admin')  
    {   
        next();  
    }  
    else{  
        res.status(403).json({message:"Access Denied, only Admin can access"})  
    }  
}  
    catch(error)  
    {  
        res.status(500).json({ message: "Error verifying user role", error });  
    }  
}; 

export const isTeacher=async(req,res,next)=>{  
    try{  
       const {email}= req.body;  
       const user=await User.findOne({email});  
        if(user && user.role ==='Teacher')  
        {  
            next();  
        }  
        else  
        {  
            res.status(403).json({message:"Access Denied, only Teacher can access"})  
        }  
  
    }  
    catch(error)  
    {  
        res.status(500).json({message:"Error verifying user role",error})  
    }  
} 

export const isStudent=async(req,res,next)=>{  
    try{  
       const {email}= req.body;  
       const user=await User.findOne({email});  
        if(user && user.role==='Student')  
        {  
            next();  
        }  
        else  
        {  
            res.status(403).json({message:"Access Denied, only Students can access"})  
        }  
  
    }  
    catch(error)  
    {  
        res.status(500).json({message:"Error verifying user role",error})  
    }  
}

export const isAdminOrTeacher = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (user && (user.role === 'Admin' || user.role === 'Teacher')) {
            next();
        } else {
            res.status(403).json({ message: "Access Denied, only Admin or Teacher can access" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error verifying user role",
            error: error.message
        });
    }
};