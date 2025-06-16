import jwt from 'jsonwebtoken';
const { verify } = jwt;

import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    console.log("🔐 Incoming request on secure route");

    // Check for token in cookies or headers
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    console.log("📦 Token received:", token ? token.slice(0, 10) + "..." : "None");

    if (!token) {
        console.warn("🚫 No token provided");
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        console.log("✅ Token decoded:", decoded);

       console.log("Checking user with ID:", decoded.userId);
const user = await User.findById({_id});
console.log("User from DB:", user);

        if (!user) {
            console.warn("🕵️‍♂️ User not found for ID:", decoded.userId);
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        // Attach user info to request for downstream use
        req.user = user;
        console.log("👤 User authenticated:", user.email || user.username || user._id);

        // All good, move to next middleware
        next();

    } catch (error) {
        console.error("💥 Token verification failed:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};

export default secureRoute;
