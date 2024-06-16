const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/dbconnection")
const router = require('./routes/routes')

const app = express();

app.use(cors());
app.use(express.json())



const PORT = 8000 || process.env.PORT


// Routes
app.use('/api', router);


// Error handling middleware
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


//database connection and server starting
connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server is running", PORT);
        console.log("Connected to the database");
    })
})


