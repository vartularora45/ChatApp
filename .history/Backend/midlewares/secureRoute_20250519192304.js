import jwt from 'jsonwebtoken';
import User from "../db/user.model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    clg
    console.log("Authorization header:", req.headers.authorization);
    console.log("Token from cookie:", token);

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
        debug: {
          cookies: req.cookies,
          headers: req.headers
        }
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password -confirmPassword");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

export default secureRoute;
