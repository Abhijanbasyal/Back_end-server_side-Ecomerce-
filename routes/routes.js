const express = require("express");


const router = express.Router();

const signUpController = require("../controller/SignUpIn/Signup");
const loginController = require("../controller/SignUpIn/Login");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controller/Users/userDetails");

router.post("/sign-up", signUpController);
router.post("/login", loginController);
router.get("/user-details", authToken, userDetailsController)






module.exports = router