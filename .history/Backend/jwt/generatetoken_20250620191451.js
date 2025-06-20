import jwt from 'jsonwebtoken';

const createdTokenAndSaveCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
  }

  // Create token valid for 30 days
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

  console.log('Generated token:', token);
  console.log('Decoded token:', jwt.decode(token));

  // Set cookie
  res.cookie('jwt', token, {
  httpOnly: true,
  secure: true,            // ✅ Required for HTTPS domains
  sameSite: 'None',        // ✅ Required for cross-site cookies
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
});


  console.log("Cookie set in response:", res.getHeaders());

  return token;
};

export { createdTokenAndSaveCookie };
