const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/dbconnection")
const router = require('./routes/routes')

const app = express();

app.use(cors());



const PORT = 8000 || process.env.PORT


//error message
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal Servor Error";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


//database connection and server running
connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server is running", PORT);
        console.log("Connected to the database");
    })
})


