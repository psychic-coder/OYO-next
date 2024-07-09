import connectDB from "@/db";
import User from "@/models/userModel"
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";

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

         const hashedPassword=await bcrypt.hash(password,10);
        
         const newUser= new User({
            name,
            email,
            password:hashedPassword
         });
         const result =await newUser.save();
         const token= jwt.sign({token:result._id},'Code',{expiresIn:"30d"});
         return res.status(201).json({msg:"Registered Successfully !!!",token,user:result})
    }
}