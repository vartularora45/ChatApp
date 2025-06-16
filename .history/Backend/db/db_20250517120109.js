import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.createConnection(process.env.MONGO_URI, {
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
        
    }
}