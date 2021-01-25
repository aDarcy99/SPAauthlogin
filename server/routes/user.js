//Requires
const express = require("express");
const mongoose = require("mongoose");
const {
    OAuth2Client
} = require("google-auth-library");
//Models

//Router
const router = express.Router();

router.post("/profile/:id", async (req, res) => {

});

module.exports = router;