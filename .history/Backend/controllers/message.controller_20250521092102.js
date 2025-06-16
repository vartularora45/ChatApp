import express from 'express';
import Message from '../db/message.model.js';
import Conversation from '../db/conversation.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.userId;
        console.log(req.user)

        console.log("Sender ID:", senderId);
        console.log("Receiver ID:", receiverId);

        if (!senderId || !receiverId) {
            return res.status(400).json({ message: "Sender or Receiver ID is missing" });
        }

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
                messages: []
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        await newMessage.save();
        conversation.messages.push(newMessage._id);
        await conversation.save();

        res.status(200).json({ message: "Message sent successfully", data: newMessage });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



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


