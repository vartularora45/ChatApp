import express from 'express';
import Message from '../db/message.model';


export const sendMessage = async (req, res) => {
    const [userId, receiverId, message] = req.body;
    if(!userId || !receiverId || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newMessage = new Message({
            senderId: userId,
            receiverId: receiverId,
            message: message
        });

        await newMessage.save();
        res.status(201).json({ message: "Message sent successfully", data: newMessage });
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
}


export const recieveMessage = async (req, res) => {
    const [userId, receiverId] = req.body;
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

