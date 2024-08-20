const express = require("express");


const router = express.Router();


//importing the controllers
const SignUp = require("../controller/AuthController/SignUp");
const SignIn = require("../controller/AuthController/SignIn");
const GoogleAuth = require("../controller/AuthController/GoogleAuth");
const { verifyUserToken } = require("../utils/verifyUserToken");
const userUpdate = require("../controller/Users/userUpdate");

//auth routes
router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/google-sign", GoogleAuth);


//users
router.post("/updateUser/:id", verifyUserToken, userUpdate);




module.exports = router