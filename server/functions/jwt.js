require("dotenv").config();
const jwt = require('jsonwebtoken');

function getNewUserAccessToken(user, secretKey){
  delete user.googleId;
  return jwt.sign({ user }, secretKey, {expiresIn: 600});
}

function getNewUserRefreshToken(user, secretKey){
  return jwt.sign({ user }, secretKey);
}

function authenicateClientToken(token){
  jwt.verify(token, process.env.JWT_SECRET_KEY)
}


module.exports = { getNewUserAccessToken, getNewUserRefreshToken };