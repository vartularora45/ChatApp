import express from 'express';
import Message from '../db/message.model.js';
import Conversation from '../db/conversation.model.js';

export const sendMessage = async (req, res) => {
    

    try {
       const {message} = req.body;
         const {id : receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Message.findOne({
           members: {
                $all: [senderId, receiverId]
            }
        });
        
        

        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
}


export const recieveMessage = async (req, res) => {
    const{userId, receiverId} = req.body;
    if(!userId || !receiverId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const messages = await Message.find({
            $or: [
                { senderId: userId, receiverId: receiverId },
                { senderId: receiverId, receiverId: userId }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).json({ message: "Messages retrieved successfully", data: messages });
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
}


