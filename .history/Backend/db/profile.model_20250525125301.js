import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    pic: {
        type: String,
        required: true,
        trim: true
    },
    followers: {
        type: Array,
        required: true,
        trim: true
    },
    following: {
        type: Array,
        required: true,
        trim: true
})