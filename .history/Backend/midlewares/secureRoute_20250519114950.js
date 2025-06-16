import User from "../db/user.model.js";
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const secureRoute = async (req, res, next) => {
    try {
        console.log("Cookies received:", req.cookies);

        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        const userId = new mongoose.Types.ObjectId(decoded.userId); // ✅ FIXED HERE
        const user = await User.findById(userId);
        console.log("User found:", user);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};

export default secureRoute;
