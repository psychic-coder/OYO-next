import mongoose from "mongoose";

const uri=process.env.MONGO_URI;
 const connectDB=async ()=>{
    await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("DB connected....");
}
export default connectDB;