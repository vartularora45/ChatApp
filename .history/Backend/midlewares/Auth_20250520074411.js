import express from "express";


import jwt from "jsonwebtoken";


const Authmiddleware = (req, res, next) => {
   try {
    
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
    
   }
}
