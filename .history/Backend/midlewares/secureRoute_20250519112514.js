import { verify } from "jsonwebtoken";

const secureRoute = (req, res, next) => {
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized
    access - no token provided" });
    