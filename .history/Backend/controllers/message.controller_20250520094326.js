import express from 'express';
import Message from '../db/message.model';


export const sendMessage = async (req, res) => {
    const [userId, receiverId, message] = req.body;
    
}