const userModel = require('../../models/userModel');
const createError = require('../../utils/error');
const createSuccess = require('../../utils/success');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


async function loginController(req, res, next) {
    try {

        const { email, password } = req.body;

        if (!email) {
            return next(createError(401, "Please, provide the email."));
        }
        if (!password) {
            return next(createError(402, "Please, provide the password."));
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return next(createError(404, "User not found"));
        }

        const checkPassword = await bcrypt.compareSync(password, user.password);

        if(checkPassword){
            const tokenData = {
                _id: user._id,
                email: user.email,

            }

          const token = await  jwt.sign( tokenData, process.env.SECRET_KEY ,{ expiresIn: 60 * 60 });

          const tokenOption = {
            httpOnly : true,
            secure : true
          }

          const { password: userPassword, ...userWithoutPassword } = user._doc;

          res.cookie("token", token, tokenOption).json(createSuccess(201, "User login up successfully!", { user: userWithoutPassword, token }));


        }else{
            return next(createError(403, "Please, check your password."));

        }



    } catch (err) {
        next(err);
    }

}



module.exports = loginController;