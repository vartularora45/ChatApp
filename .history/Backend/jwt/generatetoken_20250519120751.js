import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createdTokenAndSaveCookie = (user_Id, res) => {
  console.log("🔑 Creating token for user ID:", user_Id);

  const token = jwt.sign({ userId: user_Id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expiration time
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });

  console.log("📦 Token created and cookie set");

  return token;
};

export { createdTokenAndSaveCookie };
