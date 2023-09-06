const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const asyncHandler = require('express-async-handler');
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require('../../utils/jwt');

/**
 * @description Register User
 * @route POST /api/auth/register
 * @access Public
 */
const register = async (req, res) => {
  // Get all the user details from the request Body
  const { fullname, email, password, profileImage, username } = req.body;

  if (!fullname || !email || !password) {
    res.status(400).json('Please add all fields');
    return;
  }

  // Check if Email already exist in the database
  const emailExit = await User.findOne({ email });
  if (emailExit) {
    res.status(400).json('Email already exist');
    return;
  }

  //Hashing the user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const user = new User({
    email,
    fullname,
    password: hashedPassword,
    profileImage,
    username,
  });

  // Save the user to the database and check for any error
  try {
    const savedUser = await user.save();

    // Create a JWT Access Token
    const accessToken = signAccessToken(savedUser._id);
    const refreshToken = signRefreshToken(savedUser._id);

    res.status(201).json({
      userId: savedUser._id,
      userDetails: user,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(500).json('Invalid user data');
  }
};

/**
 * @description Login User
 * @route POST /api/auth/login
 * @access Public
 */
const login = async (req, res) => {
  // Get all the user details from the request Body
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json('All fields are required');

  try {
    // Check if username exit
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json('User not found');
      return;
    }

    // Checking if the user password is correct
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.status(401).json('Username/password not valid');
      return;
    }

    // if (password != user.password) {
    //   res.status(401).json('Username/password not valid');
    //   return;
    // }

    // Generating JWT Tokens
    const accessToken = signAccessToken(user._id);
    const refreshToken = signRefreshToken(user._id);

    res.status(200).json({
      userId: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
      userDetails: user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) throw res.status(500);
    const userId = verifyRefreshToken(refreshToken);

    const accessToken = signAccessToken(userId);
    const refToken = signRefreshToken(userId);

    res.status(200).json({ AccessToken: accessToken, RefreshToken: refToken });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
