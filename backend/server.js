// const express =require("express")
// const dotenv=require("dotenv")

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});


// THis look ugly so we use middleware for this and us something like

app.use("/api/auth",authRoutes)



// app.get("/api/auth/signup", (req, res) => {
//   console.log("signup");
// });

// app.get("/api/auth/login", (req, res) => {
//   console.log("signup");
// });

// app.get("/api/auth/logout", (req, res) => {
//   console.log("signup");
// });



app.listen(PORT, () => console.log(`server running on port ${PORT}`));
