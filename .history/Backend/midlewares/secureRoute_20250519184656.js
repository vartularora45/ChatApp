import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    try {
        // Enhanced debug logging
        console.log("Request headers:", req.headers);
        console.log("Cookie header:", req.headers.cookie);
        console.log("Parsed cookies:", req.cookies);
        
        const token = req.cookies?.jwt || req.headers.authorization?.split(' ')[1];

        if (!token) {
            console.log("No token found in cookies or authorization header");
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // Add more debug logging
        console.log("Token found:", token);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        const user = await User.findById(decoded.userId)
            .select("-password -confirmPassword");

        if (!user) {
            console.log("User not found for ID:", decoded.userId);
            res.clearCookie("jwt", { path: '/' });
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Auth error details:", error);
        res.clearCookie("jwt", { path: '/' });
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};

export default secureRoute;