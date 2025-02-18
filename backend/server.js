// const express =require("express")
// const dotenv=require("dotenv")

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();



app.use(express.json());   // to parse the incoming request with json payloads (from req.body)
// app.get("/", (req, res) => {
//   res.send("hello world!");
// });


// THis look ugly so we use middleware for this and us something like

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)




// app.get("/api/auth/signup", (req, res) => {
//   console.log("signup");
// });

// app.get("/api/auth/login", (req, res) => {
//   console.log("signup");
// });

// app.get("/api/auth/logout", (req, res) => {
//   console.log("signup");
// });



app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
