import User from '../models/data.js';

export const register = async(req,res,next)=>{
    try{
        const {name,email}=req.body;
        const newUser=new User({
            name,
            email,
        });
        await newUser.save();
        res.status(200).json({message:"User created successfully"});
    }
    catch(err){
        next(err)
    }
}