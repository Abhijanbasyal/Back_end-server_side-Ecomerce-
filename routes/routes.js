const express = require("express");


const router = express.Router();

const signUpController = require("../controller/SignUpIn/Signup");
const loginController = require("../controller/SignUpIn/Login");

router.post("/sign-up", signUpController);
router.post("/login", loginController);




module.exports = router