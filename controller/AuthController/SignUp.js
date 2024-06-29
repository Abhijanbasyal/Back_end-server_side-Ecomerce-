const bcryptjs = require('bcryptjs');
const userModel = require("../../models/userModel")
const createSuccess = require("../../utils/success")

async function SignUp  (req, res, next) {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new userModel({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(200).json(createSuccess(200, "User signuped up useccessfuly" ));
} catch (error) {
    next(error);
  }
};

module.exports = SignUp; 