const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    UserImage: {
        type: String,
        default: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
    role: {
        type: String,
        enum: ["ADMIN", "CUSTOMER", "STAFF"],
        default: "CUSTOMER",
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    country: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
