import mongoose from "mongoose";
import Message from "./message.model.js";


const conversationSchema = new mongoose.Schema({
    members :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            required: true,
            default: []
        }
    ]

},{timestamp: true})


const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;