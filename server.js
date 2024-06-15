const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());

//adding database

const PORT = 8000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running");
})

//adding utils for the error