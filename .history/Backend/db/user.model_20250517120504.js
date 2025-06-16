import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   confirmPassword: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png"
    },
    bio: {
        type: String,
        default: "Hey there! I am using this app."
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})