import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const = (userId, res) => {
  try {
    console.log("🔑 Creating token for user ID:", userId);

    if (!process.env.JWT_SECRET) {
      throw new Error("❌ JWT_SECRET is not defined in environment variables.");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    console.log("📦 Token created and cookie set successfully");
    return token;

  } catch (error) {
    console.error("⚠️ Error creating token and setting cookie:", error.message);
    throw error;
  }
};

export { createdTokenAndSaveCookie };
