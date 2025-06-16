import mongoose from "mongoose";


const connectDB = async () => {
    const PORT = 3000;
    try {
        const conn = await mongoose.connect(PORT, {
        useNewUrlParser: true, useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    }


export default connectDB;