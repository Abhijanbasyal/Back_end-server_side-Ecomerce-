const express = require("express");


const router = express.Router();

const SignUp = require("../controller/AuthController/SignUp");
const SignIn = require("../controller/AuthController/SignIn");


router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);





 
module.exports = router