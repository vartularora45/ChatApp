import jwt from "jsonwebtoken";

const createdTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env");
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  

  console.log("✅ Token created and cookie set");
  return token;
};

export { createdTokenAndSaveCookie };
