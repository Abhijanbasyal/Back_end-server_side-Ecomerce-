const bcryptjs = require('bcryptjs');
const userModel = require("../../models/userModel")
const createSuccess = require("../../utils/success")
const createError = require("../../utils/error");

async function SignUp(req, res, next) {
  const { username, email, password } = req.body;


  try {
    const user = await userModel.findOne({ email });

    if (user) {
      throw next(createError(401, "Already user exits."))
    }

    if (!email) {
      throw next(createError(402, "Please provide email"))
    }
    if (!password) {
      throw next(createError(403, "Please provide password"))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json(createSuccess(200, "User signuped up useccessfuly", newUser));
  } catch (error) {
    next(error);
  }
};

module.exports = SignUp; 