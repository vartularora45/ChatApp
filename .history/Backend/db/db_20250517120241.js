import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
    try {
        const conn = await mongoose.createConnection(process.env.MONGO_URI, {
           
        });
        
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDB;