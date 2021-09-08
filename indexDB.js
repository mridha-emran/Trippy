const express = require("express");
const app= express();
const router= require("./Router/routers")
const mongoose = require("mongoose")

const dovtenv=require("dotenv")
 dovtenv.config({
     path:"./config.env"
 })

app.use(express.json())

app.use("/hotel",router)


mongoose.connect(process.env.DB, {useNewUrlParser: true,})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

    app.listen( process.env.PORT,()=>( console.log("this server listing port:3000")))
