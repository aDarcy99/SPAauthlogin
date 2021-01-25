require("dotenv").config();
//Requires
const express = require("express");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
//functions 
const { getNewUserAccessToken, getNewUserRefreshToken } = require("../functions/jwt.js");
//Models
const User = require("../models/user.js");
const RefreshToken = require("../models/refreshToken.js");
//Router
const router = express.Router();
//Google Oauth setup
const googleClientId = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(googleClientId);

router.post("/google", async (req, res) => {
    //Get google tokenId from request
    const { tokenId } = req.body;
    //define user
    let user;
    
    //Verify token Id
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.CLIENT_ID
    });
    //Get googleId and email from payload;
    const { sub: googleId, email } = ticket.getPayload();
    
    //Get user from database, return null if user does not exist 
    user = await User.findOne({ googleId: googleId }, "-googleId")

    // create user in database if it does not exist, 
    if(!user){
        user = await (await User.create({ googleId, email })).toObject(); // set to mongoose response to normal js object so we can delete googleId from response
        delete user.googleId;
    }
    //create token variables
    const token = {
        access: getNewUserAccessToken(user, process.env.JWT_SECRET_KEY),
        refresh: getNewUserRefreshToken(user, process.env.JWT_SECRET_KEY) 
    };
    RefreshToken.create({ token: token.refresh });
    //Set refresh token in header
    res.cookie("refreshToken", token.refresh, { httpOnly: true });

    //send that shit
    res.json(token.access);
});

router.post("/refresh", async (req, res) => {
    const refreshToken = req.cookies && req.cookies.refreshToken ? req.cookies.refreshToken : null; 
    //get refresh token from req.body
    try {
        if(refreshToken){
            const dbRefreshToken = await (await RefreshToken.findOne({token: refreshToken})).token;
            if(dbRefreshToken){
                const user = jwt.verify(dbRefreshToken, process.env.JWT_SECRET_KEY).user;
                res.json(getNewUserAccessToken(user, process.env.JWT_SECRET_KEY));
            }
            //send new access token to memory;
            //recycle refresh token?
        }else{
            //send empty string response
            res.send("");
        }
        //check if refresh token exists
    } catch (error) {
        res.send(error);
    }
})

router.post("/cancelrefresh", async ( req, res) => {
    const refreshToken = req.cookies && req.cookies.refreshToken ? req.cookies.refreshToken : null;
    
    try {
        if(refreshToken){
            await (await RefreshToken.deleteOne({token: refreshToken}));
            res.cookie("refreshToken", null, { httpOnly: true, expires: new Date(0) });
            res.sendStatus(200);
        }
    } catch (error) {
        //send empty string response
        res.send(error);
    }
})

module.exports = router;