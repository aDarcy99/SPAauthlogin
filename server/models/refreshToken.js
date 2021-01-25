const mongoose = require("mongoose");
const uuid = require("uuid");

const RefreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
});

const RefreshToken = mongoose.model("refreshToken", RefreshTokenSchema);

module.exports = RefreshToken;