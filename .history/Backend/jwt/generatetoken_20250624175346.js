// utils/createdTokenAndSaveCookie.js

import jwt from "jsonwebtoken";

/**
 * Creates JWT token and sends it as a secure HTTP-only cookie
 * @param {string} userId - MongoDB User ID
 * @param {object} res - Express response object
 * @returns {string} token - The generated JWT token
 */
const createdTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env");
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  domain: ".chatuapp.me", // Critical for cross-subdomain
  path: "/",
  maxAge: 30 * 24 * 60 * 60 * 1000,
  partitioned: true // Required for Chrome's new storage partitioning
});

  console.log("✅ Token created and cookie set");
  return token;
};

export { createdTokenAndSaveCookie };
