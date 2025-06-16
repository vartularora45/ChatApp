import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       console.log()
        // optional: check for 'userId' or 'id' depending on your token payload
        const userData = await User.findById(decoded.userId || decoded.id).select("-password -confirmPassword");

        if (!userData) {
            // Clear the stale cookie
            res.clearCookie("jwt", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            });
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        req.user = userData; // attach user to request
        next(); // proceed to route

    } catch (error) {
        console.error("Token verification error:", error);

        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        return res.status(401).json({ message: "Unauthorized - Invalid or expired token" });
    }
};

export default secureRoute;
