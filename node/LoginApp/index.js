const express = require("express");
var cors=require("cors");
const app = express();
app.use(cors()); 
const PORT = 9000;
const db = require("./db");
const AuthController = require("./controller/authController");

app.use("/auth", AuthController);
app.listen(PORT, () => console.log("Server started on the port", PORT));