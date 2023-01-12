const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


/**
 * Create a token for the users
 * @param {*} user 
 * @returns 
 */
const signToken = async (user) => {
  const sign = await jwt.sign(
    {
      _id: user.id,
      role: user.role,
      alias: user.alias,
      name: user.name,
      lastName: user.lastName
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
};


/**
 * Verify the token
 * @param {*} token 
 * @returns 
 */
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = {
  signToken,
  verifyToken,
};