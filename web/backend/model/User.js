const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    sustainbilityScore: {
        type: Number,
        required: false,
        default: 0
    },
    carbonFootprint: {
        type: Number,
        required: false,
        default: 0
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;