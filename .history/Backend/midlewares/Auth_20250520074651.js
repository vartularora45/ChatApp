import express from "express";


import jwt from "jsonwebtoken";


const Authmiddleware = (req, res, next) => {
   try {
     const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
     console.log(token)
     clg
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
        return res.status(403).json({ message: "Forbidden" });
        }
        req.user = decoded;
        next();
    });
   } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
    
   }
}

export default Authmiddleware;