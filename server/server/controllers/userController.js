const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

/**
 * @description Get all users
 * @route Get /api/user/all
 * @access Private
 */
const getAllUser = async (req, res) => {
  const users = await User.find();

  if (users.length === 0) {
    res.status(200).json({ message: 'no users' });
  } else {
    res.status(200).json({ status: true, data: users });
  }
};

/**
 * @description Update user
 * @route PUT /api/v1/user/:id
 * @access Private
 */
const update = async (req, res) => {
  // Get all the user details from the request Body
  let { userId, password } = req.body;
  const { id } = req.params;

  // If user try to update pasword
  // if (password) {
  //   try {
  //     //Hashing the user password before updating it
  //     const salt = await bcrypt.genSalt(10);
  //     password = await bcrypt.hash(password, salt);
  //   } catch (error) {
  //     return res.status(500).json(error.message);
  //   }
  // }

  try {
    const user = await User.findByIdAndUpdate(id, { $set: req.body });
    return res.status(200).json({ message: 'Account has been updated' });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
//
//
//
//
//
//
/**
 * @description delete user
 * @route PUT /api/v1/user/:id
 * @access Private
 */
const deleteUser = async (req, res) => {
  // Get all the user details from the request Body
  let { userId, isAdmin } = req.body;
  const { id } = req.params;

  if (userId === id || isAdmin) {
    try {
      const user = await User.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: 'Account has been deleted successfully' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } else {
    res.status(403).json({ message: 'You can delete only your account' });
  }
};

// Get a sigle user
const getUser = async (req, res) => {
  // Get id from the request req.params
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
//
//
//
//
//
//
/**
 * @description Add a user as friend
 * @route POST /api/v1/user/addFriend
 * @access Private
 */
const sendFriendRequest = async (req, res) => {
  // Get all the user details from the request Body
  let { personId } = req.body;
  const userId = req.user.id;

  if (!userId || !personId) {
    res.status(400).json({
      status: false,
      error: 'Please id is missing',
    });
    return;
  }

  // Checking if users try to send a request to them self
  if (userId !== personId) {
    // Sending a friend request to the user
    try {
      const user = await User.findById(personId);
      const currentUser = await User.findById(userId);

      // Checking if the users are already friends
      if (!user.friends.includes(userId)) {
        await user.updateOne({ $push: { friends: userId } });
        await currentUser.updateOne({ $push: { friends: personId } });
        res.status(200).json({
          status: true,
          message: 'user has been added as friend',
        });
      } else {
        res
          .status(403)
          .json({ status: true, message: 'You are already friends' });
      }
    } catch (error) {
      return res.status(500).json({ status: false, error: error });
    }
  } else {
    res
      .status(403)
      .json({ status: true, message: "You can't friend yourself" });
  }
};
//
//
//
//
//
//
// UnFriend a user
const unfriendUser = async (req, res) => {
  // Get all the user details from the request Body
  let { personId } = req.body;
  const userId = req.user.id;

  if (!userId || !personId) {
    res.status(500).json({
      status: false,
      error: 'Please id is missing',
    });
    return;
  }

  // Checking if users try to send a request to them self
  if (userId !== personId) {
    // Sending a friend request to the user
    try {
      const user = await User.findById(personId);
      const currentUser = await User.findById(userId);

      // Checking if the users are already friends
      if (user.friends.includes(userId)) {
        await user.updateOne({ $pull: { friends: userId } });
        await currentUser.updateOne({ $pull: { friends: personId } });
        res.status(200).json({
          status: true,
          message: 'user has been unfriend',
        });
      } else {
        res.status(403).json({
          status: true,
          message: 'you are not friends with this user',
        });
      }
    } catch (error) {
      return res.status(500).json({ status: false, error });
    }
  } else {
    res
      .status(403)
      .json({ status: true, message: "You can't unfriend yourself" });
  }
};
//
//
//
//
//
//

module.exports = {
  update,
  deleteUser,
  getUser,
  sendFriendRequest,
  unfriendUser,
  getAllUser,
};
