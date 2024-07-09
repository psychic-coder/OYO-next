import mongoose from "mongoose";

const uri='mongodb+srv://rohit:PSS3IiP18AMkrHuh@cluster0.xfzewxe.mongodb.net/oyo?retryWrites=true&w=majority&appName=Cluster0'
 const connectDB=async ()=>{
    await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("DB connected....");
}
export default connectDB;