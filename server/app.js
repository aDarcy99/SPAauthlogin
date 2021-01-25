// Load environment variables from .env folder
require("dotenv").config();

//Requires
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//routes
const testRouter = require("./routes/tests.js");
const authRouter = require("./routes/auth.js");
const cookieParser = require("cookie-parser");
//use express
const app = express();
var port = 3000;

//connect to db
require("./config/db.js");

//Use static files in public on every route(middleware)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../src")));

//req.body middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//use routes
app.use("/api/test", testRouter);
app.use("/api/auth", authRouter)

//Listen to port
app.listen(process.env.PORT || port, () => {
    console.log(`server started on ${port}`);
})