const express = require("express");


const router = express.Router();

const signUpController = require("../controller/SignUpIn/Signup");

router.post("/sign-up", signUpController);




module.exports = router