import { verify } from "jsonwebtoken";
import User from "../models/user.js"; // Adjust the path as necessary
const secureRoute = async(req, res, next) => {
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.Userid);
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }
        req.user = userId; // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    
}
export default secureRoute;