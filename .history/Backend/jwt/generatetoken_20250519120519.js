import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createTokenAndSaveCookie = (userId, res) => {
  console.log("🔑 Creating token for user ID:", userId);

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // only HTTPS in prod
    sameSite: 'strict', // prevent CSRF
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
  });

  console.log("📦 Token created and cookie set");

  return token;
};

export { createTokenAndSaveCookie };
