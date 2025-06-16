import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    try {
        // 1. Get token
        const token = req.cookies?.jwt || req.headers.authorization?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ 
                success: false,
                message: "Please login to continue" 
            });
        }

        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token data:", decoded);

        // 3. Find user - try both common ID fields
        const user = await User.findOne({
            $or: [
                { _id: decoded.userId },
                { _id: decoded.id }
            ]
        }).select('-password');

        if (!user) {
            console.error("User not found for ID:", decoded.userId || decoded.id);
            return res.status(401).json({ 
                success: false,
                message: "Your session is invalid - please login again" 
            });
        }

        // 4. Attach user to request
        req.user = user;
        next();

    } catch (error) {
        console.error("Authentication error:", error.message);
        
        const message = error.name === 'TokenExpiredError' 
            ? "Your session has expired" 
            : "Invalid authentication";
            
        return res.status(401).json({ 
            success: false,
            message 
        });
    }
};

export default secureRoute;