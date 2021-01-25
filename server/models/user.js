const mongoose = require("mongoose");
const uuid = require("uuid");

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        default: () => `user_${uuid.v4()}`, //switch to function that creates random name from list of names??
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: new Date(),
        required: true
    },
    dateLastEdited: {
        type: Date,
        default: new Date(),
        required: true
    },
    previousDisplayNames: {
        type: Array,
        default: [],
        required: true
    },
    accessLevel: {
        type: Number,
        default: 1,
        required: true
    },
    role: {
        type: String,
        default: "user",
        required: true
    },
    active: {
        type: Boolean,
        default: false,
        required: true
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;