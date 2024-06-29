const userModel = require('../../models/userModel');
const createError = require('../../utils/error');
const createSuccess = require('../../utils/success');
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");


async function SignIn (req, res, next) {
    const { email, password } = req.body;
    try {
        const validUser = await userModel.findOne({ email });
        if (!validUser) return next(createError(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(createError(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY);
        const { password: pass, ...rest } = validUser._doc;

        const TokenOption = {
            httpOnly: true,
            secure: true

        }

        res.cookie('access_token', token, TokenOption).status(200).json(createSuccess(200, "User signuped up useccessfuly", rest));

    } catch (err) {
        next(err);
    }
};


module.exports = SignIn;