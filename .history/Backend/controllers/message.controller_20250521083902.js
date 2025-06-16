import express from 'express';
import Message from '../db/message.model.js';
import conversation from '../db/conversation.model.js';

export const sendMessage = async (req, res) => {
    

    try {
       const {message} = req.body;
         const {id : receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Message.findOne({
            $or: [
                { senderId: senderId, receiverId: receiverId },
                { senderId: receiverId, receiverId: senderId }
            ]
        });
        if(!conversation) {
            conversation = await Message.create({
                senderId,
                receiverId,
                messages: []
            });
        }
        const newMessage = {
            senderId,
            receiverId,
            message
        };
        conversation.messages.push(newMessage);
        await conversation.save();
        res.status(200).json({ message: "Message sent successfully", data: conversation });
    

        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
}


