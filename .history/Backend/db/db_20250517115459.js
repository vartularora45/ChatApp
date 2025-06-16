import mongoose from "mongoose";


const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI || 4000, {
            
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDb;