import jwt from 'jsonwebtoken';
import User from '../db/user.model.js';

const secureRoute = async (req, res, next) => {
  try {
    // Check if token exists in cookies
    const token = req.cookies.jwt;
    

    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized - No token provided',
        debug: {
          cookies: req.cookies,
          headers: req.headers
        }
      });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Make sure your JWT payload contains 'id' (adjust if your payload uses a different key)
    const user = await User.findById(decoded.id).select('-password -confirmPassword');

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' });
    }

    // Attach user info to request for next middlewares or route handlers
    req.user = user;

    // Move on!
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

export default secureRoute;
