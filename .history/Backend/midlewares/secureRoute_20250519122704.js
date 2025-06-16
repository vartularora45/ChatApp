
import jwt from 'jsonwebtoken';
const { verify } = jwt;

import User from "../db/user.model.js";

const secureRoute = async(req, res, next) => {
    const token = req.cookies.jwt;
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        const userData = await User.findById(decoded.userId);
        console.log(userData)
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }
       
        req.user = user; // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    
}
export default secureRoute;