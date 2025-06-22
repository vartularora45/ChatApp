import jwt from "jsonwebtoken";

const Authmiddleware = (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    console.log("🛡️ AUTH MIDDLEWARE DEBUG:", {
      cookies: req.cookies,
      headers: req.headers,
      tokenFound: token,
    });

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - Token not provided",
        debug: {
          cookies: req.cookies,
          headers: req.headers,
        },
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};

export default Authmiddleware;
