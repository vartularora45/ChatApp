import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    console.log("🔐 Incoming request on secure route");

    try {
        // 1. Get token from cookies or Authorization header
        const token = req.cookies?.jwt || req.headers.authorization?.replace('Bearer ', '');
        console.log("📦 Token received:", token ? `${token.slice(0, 10)}...` : "None");

        if (!token) {
            console.warn("🚫 No token provided");
            return res.status(401).json({ 
                success: false,
                message: "Please login to access this resource" 
            });
        }

        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Token decoded:", decoded);

        // 3. Find user (without password field)
        console.log("Checking user with ID:", decoded.userId || decoded.id);
        const user = await User.findById(decoded.userId || decoded.id).select('-password');
        console.log("User from DB:", user ? user._id : null);

        if (!user) {
            console.warn("🕵️‍♂️ User not found");
            return res.status(401).json({ 
                success: false,
                message: "The user belonging to this token no longer exists" 
            });
        }

        // 4. Attach user to request
        req.user = user;
        console.log(`👤 User authenticated: ${user.email || user.username || user._id}`);

        next();

    } catch (error) {
        console.error("💥 Authentication error:", error.message);
        
        let message = "Invalid authentication token";
        if (error.name === 'TokenExpiredError') {
            message = "Your session has expired, please login again";
        } else if (error.name === 'JsonWebTokenError') {
            message = "Invalid authentication token";
        }

        return res.status(401).json({ 
            success: false,
            message 
        });
    }
};

export default secureRoute;