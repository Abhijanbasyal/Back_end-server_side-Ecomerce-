const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    UserImage: String,
    role: {
        type: String,
        enum: ["ADMIN", "CUSTOMER", "STAFF"],
        default: "CUSTOMER",
      },
},{
    timestamps: true
});


const userModel = mongoose.model("Users", userSchema);


module.exports = userModel;