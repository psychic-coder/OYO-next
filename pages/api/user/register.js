import connectDB from "@/db";
import User from "@/models/userModel"

export default async function handler(req,res){
    if(req.method==="POST"){
        connectDB();
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({msg:"All fields are mandatory !"});
        }
        const emailExists=await User.findOne({email:email});
        if(emailExists)
         return res.status(400).json({msg:"User already Registered !!"});
        
         const newUser= new User({
            name,
            email,
            password
         });
         const result =await newUser.save();
         return res.status(201).json({msg:"Registered Successfully !!!"})
    }
}