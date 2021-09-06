const express = require("express");
const app= express();
const hotelInfo= require("./data/hotel")
const resturentInfo=require("./data/resturent")
const PORT=8000;

app.use(express.json())

app.get("/hotels",(_req,res)=>{

    res.json({
		status: "OK",
		message:"data send",
        data: hotelInfo
	});

})

app.get("/hotels/:id",(req,res)=>{
    const idhotel = parseInt(req.params.id)
    const findId= hotelInfo.find(elem => elem.id === idhotel)
    res.json({
		status: "OK",
		message:"data send",
        data: findId
	});

})
app.post("/hotels",(req,res)=>{
    const addhotels = req.body
    hotelInfo.push(addhotels)
    res.json({
		status: "OK",
		message:"data send",
        data: addhotels
	});

})





app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))