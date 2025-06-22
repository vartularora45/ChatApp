import jwt from "jsonwebtoken";

const createdTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env");
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ✅ Auto switch
    sameSite: "Lax", // Safe for most cross-origin use cases
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  console.log("✅ Token created and cookie set");
  return token;
};

export { createdTokenAndSaveCookie };
