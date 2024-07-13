const userModel = require("../../models/userModel");
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs'); 




async function GoogleAuth(req, res, next) {

    try {

        const user = await userModel.findOne({ email: req.body.email });
        if (user) {


            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 8 });
            const { password: pass, ...rest } = user._doc;


            const TokenOption = {
                httpOnly: true,
                secure: true

            }

            res.cookie('access_token', token, TokenOption).status(200).json(rest);
        } else {
            const passwordGenerating = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(passwordGenerating, 10);
            const newUser = new userModel({
                username:
                    req.body.name.split(' ').join('').toLowerCase() +
                    Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPassword,
                UserImage: req.body.photo,
            });

            await newUser.save();

            const token = jwt.sign({ id: newUser._id },  process.env.SECRET_KEY, { expiresIn: 60 * 60 * 8 });
            const { password: pass, ...rest } = newUser._doc;

            const TokenOption = {
                httpOnly: true,
                secure: true

            }

            res
                .cookie('access_token', token, TokenOption)
                .status(200)
                .json(rest);
        }

    } catch (err) {
        next(err);

    }
}




module.exports = GoogleAuth;