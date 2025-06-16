import User from "../db/user.model.js";
import jwt from 'jsonwebtoken';

const secureRoute = async (req, res, next) => {
    try {
        // DEBUG: print cookies to see what's going on
        console.log("Cookies received:", req.cookies);

        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
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
