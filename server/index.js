import express from "express";
import Connection from "./database/db.js";

const app = express();
const PORT = 8000;

Connection();
app.listen(PORT, () => console.log(`Your server is running succssfully on PORT ${PORT} `));