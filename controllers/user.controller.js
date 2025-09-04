
const jwt = require('jsonwebtoken')
const { generateToken } = require('../utils/token.util');
const googleAuthSuccess = async (req, res) => {
  try {
    // Generate JWT token
    const token = generateToken(req.user._id);
    
    // Return user data (excluding password) and token
    const userResponse = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isVerified: req.user.isVerified,
    };

    res.status(200).json({
      message: "Google authentication successful",
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error("Error in googleAuthSuccess:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = googleAuthSuccess;