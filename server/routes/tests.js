//Requires
const express = require("express");
const ensureAuthenticated = require("../middleware/ensureAuthenticated.js");
const jwt = require("jsonwebtoken");

//Router
const router = express.Router();

// router.use("/", ensureAuthenticated(1));

router.get("/headers", (req, res) => {
    res.json(req.headers);
});

router.get("/error", (req, res) => {
    res.status(401).send({
        error: "You are not authorized to view this resource"
    })
})


module.exports = router