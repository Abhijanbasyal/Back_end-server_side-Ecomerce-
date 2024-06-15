const mongoose = require("mongoose");

async function connectDB() {
    try {

        mongoose.connect(process.env.MONGO_DB);
    } catch (error) {
        console.log(error, "Error while connecting to the mongoDB");
    
    }
};

module.exports = connectDB;