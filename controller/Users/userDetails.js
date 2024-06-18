const userModel = require("../../models/userModel")
const createSuccess = require("../../utils/success")

async function userDetailsController(req,res){
    try{
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId)

    
        res.json(createSuccess(201, "User Details", user))

        console.log("user",user)

    }catch(err){
      next(err);
    }
}

module.exports = userDetailsController