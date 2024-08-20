
const userModel = require('../../models/userModel');
const createError = require('../../utils/error');
const bcryptjs = require("bcryptjs");






async function userUpdate(req, res, next){
    if (req.user.id !== req.params.id)
        return next(createError(401, 'You can only update your own account!'));
      try {
        if (req.body.password) {
          req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
    
        const updatedUser = await userModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: {               //the thing user can update 
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              UserImage: req.body.UserImage,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              phoneNumber: req.body.phoneNumber,
              dateOfBirth: req.body.dateOfBirth,
              country: req.body.country,
              gender: req.body.gender
            },
          },
          { new: true }
        );
    
        const { password, ...rest } = updatedUser._doc;
    
        res.status(200).json(rest);
      } catch (error) {
        next(error);
      }

}

module.exports = userUpdate