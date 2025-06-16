import { verify } from "jsonwebtoken";

const secureRoute = (req, res, next) => {
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
      
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    
}
export default secureRoute;