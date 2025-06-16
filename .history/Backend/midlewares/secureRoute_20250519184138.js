import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    try {
        // Debug cookie handling
        console.log("All cookies:", req.cookies);
        const token = req.cookies.jwt;

        if (!token) {
            console.log("No token found in cookies");
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        // Find user and remove sensitive data
        const user = await User.findById(decoded.userId).select("-password -confirmPassword");
        
        if (!user) {
            console.log("No user found with token ID");
            res.clearCookie("jwt");
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        // Attach user to request
        req.user = user;
        next();

    } catch (error) {
        console.error("Token verification error:", error);
        res.clearCookie("jwt");
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};

export default secureRoute;