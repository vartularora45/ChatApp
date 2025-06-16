import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
           
        });
        conn.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });
        conn.on("connected", () => {
            console.log("MongoDB connected successfully");
        });
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDB;