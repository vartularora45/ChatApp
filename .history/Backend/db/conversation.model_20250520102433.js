import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        required: true
    },
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }
}, {
    timestamps: true
})