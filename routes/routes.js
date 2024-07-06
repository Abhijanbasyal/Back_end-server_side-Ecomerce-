const express = require("express");


const router = express.Router();


//importing the controllers
const SignUp = require("../controller/AuthController/SignUp");
const SignIn = require("../controller/AuthController/SignIn");

//auth routes
router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);







 
module.exports = router