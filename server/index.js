import express from "express";
const mongoose = require("mongoose");

// import Connection from "./database/db.js";

// initialise express
const app = express();
const PORT = 8000;

// Connection();

//  mondodb connect
mongoose
.connect(
    'mongodb://localhost:27017/usersdb',
    process.env.MONGODB_URI, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true}
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Server listen
app.listen(PORT, () => console.log(`Your server is running succssfully on PORT ${PORT} `));