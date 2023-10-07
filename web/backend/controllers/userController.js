const User = require('../model/User');
const asyncHandler = require('express-async-handler');

// @desc Post info of user
// @route POST /user
// @access Private
const getUserInfo = asyncHandler(async (req, res) => {
    const { username } = req.body;

    const userInfo = await User.find({ username });

    if (!userInfo) {
        res.status(400).json({ message: "User not found" })
    } else {
        res.status(200).json(userInfo)
    }
})

// @desc Patch info of user
// @route PATCH /user
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { carbonFootprint, email, firstName, sustainbilityScore, username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username required' })
    }

    const userToUpdate = await User.findOne({ username }).exec();

    if (!userToUpdate) {
        return res.status(400).json({ message: "User not found" })
    }

    userToUpdate.carbonFootprint = carbonFootprint
    userToUpdate.email = email
    userToUpdate.firstName = firstName
    userToUpdate.sustainbilityScore = sustainbilityScore
    userToUpdate.username = username

    const updatedUser = await userToUpdate.save();

    res.json({ message: `${updatedUser.username} updated` });
})

module.exports = { getUserInfo, updateUser }




