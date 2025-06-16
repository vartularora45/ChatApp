import express from 'express';
import Message from '../db/message.model.js';
import Conversation from '../db/conversation.model.js';
import { getRecieverSocketId, getIO } from '../SocketIO/socket.js';

// Controller to send a message
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.userId;

        console.log("Sender ID:", senderId);
        console.log("Receiver ID:", receiverId);
        console.log("Message from user:", message);

        if (!senderId || !receiverId || !message) {
            return res.status(400).json({ message: "Missing sender, receiver, or message" });
        }

        // Find or create conversation
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
                messages: []
            });
        }

        // Create new message (make sure your schema uses 'content')
        const newMessage = new Message({
            senderId,
            receiverId,
            message  // 👈 field should match schema
        });

        await newMessage.save();

        // Push message to conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        // Emit message via socket
        const recieverSocketId = getRecieverSocketId(receiverId);
        const io = getIO();
        if (recieverSocketId && io) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

        res.status(200).json({ data: newMessage });

    } catch (error) {
        console.error("sendMessage error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Controller to get messages between two users
export const getMessages = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.user.userId;

        const conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);  // ✅ don't return 201
        }

        const messages = conversation.messages;
        console.log("Fetched messages:", messages);

        res.status(200).json({
            message: "Messages retrieved successfully",
            messages
        });

    } catch (error) {
        console.error("getMessages error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteMessage = async ()
