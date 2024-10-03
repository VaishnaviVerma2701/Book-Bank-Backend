 import express from "express"
 import dotenv from "dotenv"
 import mongoose from "mongoose"
 import cors from "cors"
 import emailRoter from "./route/emailRouter.js"
 import  userRoute from "./route/user.route.js"

// const express =require("express");
// const dotenv=require("dotenv");
// const mongoose =require("mongoose");

import bookRoute from "./route/book.route.js"
const app=express();
app.use(cors());

app.use(express.json())
dotenv.config();

const PORT=process.env.PORT||4000;
const URI=process.env.MongoDBURI;

// connection to mongodb
try{
mongoose.connect(URI);
console.log("connected to mongodb");
}
catch(error){
console.log("error",error);
}
//defaining routes
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.use("/api",emailRoter)
app.use("/contact",userRoute)

app.listen(PORT,()=>{
    console.log(`app listen on post1 ${PORT}`);
});