import mongoose from "mongoose";


const connectDb = async () => {
    try {
        
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDb;