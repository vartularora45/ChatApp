import jwt from 'jsonwebtoken';

const createdTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
  }

  // Create token valid for 30 days
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
  // Debug logs
  console.log('Generated token:', token);
  console.log('Decoded token:', jwt.decode(token));

  // Set cookie with the token
  res.cookie('jwt', token, {
    httpOnly: true,
  
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });
   console.log(jwt.decode(token))
  return token;
};

export { createdTokenAndSaveCookie };
