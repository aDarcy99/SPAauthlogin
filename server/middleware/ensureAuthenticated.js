require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = function ensureAuthenticated(MinimumRequiredAccessLevel = 1) {
    return (req, res, next) => {
        try {
            if (req.headers.authorization) {
                //Verify Token
                const payload = jwt.verify(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET_KEY);
                //send unathorized response if Token is expired or users access level is not high enough;
                if(payload.exp >= Date.now() || payload.user.accessLevel < MinimumRequiredAccessLevel ){
                    unauthorizedResponse(res);
                }
                next();
            } else {
                unauthorizedResponse(res)
            }
        } catch (err) {

        }
    }
}

function unauthorizedResponse(response){
    response.status(401).json({error: "unauthorized attempt to access resources"})
}