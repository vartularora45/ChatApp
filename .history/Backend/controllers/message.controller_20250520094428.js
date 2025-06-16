import express from 'express';
import Message from '../db/message.model';


export const sendMessage = async (req, res) => {
    const [userId, receiverId, message] = req.body;
    if(!userId || !receiverId || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}