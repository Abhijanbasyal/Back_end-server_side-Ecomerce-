const createError = require('../../utils/error');
const createSuccess = require('../../utils/success');
const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function signUpController(req, res, next) {
    try {
        const { email, password, name } = req.body;

        // Check if the email already exists
        const existedEmail = await userModel.findOne({ email });
        if (existedEmail) {
            return next(createError(401, "User email already existed"));
        }

        // Validate input fields
        if (!name) {
            return next(createError(401, "Please, provide the name."));
        }
        if (!email) {
            return next(createError(402, "Please, provide the email."));
        }
        if (!password) {
            return next(createError(403, "Please, provide the password."));
        }

        // Generate a salt and hash the password
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Check if password hashing was successful
        if (!passwordHash) {
            return next(createError(404, "Something went wrong during password hashing"));
        }

        // Create a new user with the hashed password
        const userData = new userModel({
            name,
            email,
            password: passwordHash
        });

        // Save the user to the database
        const savedUser = await userData.save();

        // Respond with success message
        // res.status(201).json(createSuccess(201, "User signed up successfully!", savedUser));
        res.json(createSuccess(201, "User signed up successfully!", savedUser));


    } catch (err) {
        next(err);
    }
}

module.exports = signUpController;
