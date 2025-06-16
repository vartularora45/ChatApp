import jwt from "jsonwebtoken";

const Authmiddleware = (req, res, next) => {
   try {
     // Look for jwt cookie instead of token
     const token = req.cookies.jwt || req.headers["authorization"]?.split(" ")[1];
     
     console.log("Cookie value:", req.cookies.jwt);
     console.log("Auth header:", req.headers["authorization"]);
     console.log("Token found:", token);

     if (!token) {
         return res.status(401).json({ 
             message: "Unauthorized",
             debug: {
                 cookies: req.cookies,
                 headers: req.headers
             }
         });
     }

     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
         if (err) {
             console.log("Token verification error:", err);
             return res.status(403).json({ message: "Forbidden - Invalid token" });
         }
         
         console.log("Decoded token:", decoded);
         req.user = decoded;
         next();
     });
   } catch (error) {
     console.error("Auth middleware error:", error);
     return res.status(500).json({ message: "Internal server error" });
   }
}

export default Authmiddleware;