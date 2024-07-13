const express = require("express");


const router = express.Router();


//importing the controllers
const SignUp = require("../controller/AuthController/SignUp");
const SignIn = require("../controller/AuthController/SignIn");
const GoogleAuth = require("../controller/AuthController/GoogleAuth");

//auth routes
router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/google-sign", GoogleAuth);







 
module.exports = router