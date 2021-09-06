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

app.put("/hotels/:id",(req,res)=>{
    
    const hotelsQuery = req.query.name
    const hotelID = req.params.id
   
    const findId = hotelInfo.findIndex(elem => elem.id === parseInt(hotelID))
      const hotelName=hotelInfo[findId]
      hotelName.name=hotelsQuery
    
    hotelInfo.splice(findId,1,hotelName)



     console.log("id", hotelName);
     console.log("Query", hotelsQuery);
        

    // hotelInfo.push(hotelsQuery)


        
        res.json({
            status:"ok",
            message:"data update",
            data:findId
        })
        

})

app.delete("/hotels/:id",(req,res)=>{
    
    const hotelsQuery = req.query.name
    const hotelID = req.params.id
   
    const findId = hotelInfo.filter(elem => elem.id !== parseInt(hotelID))
      
        console.log(findId)
        res.json({
            status:"ok",
            message:"data update",
            data:findId
        })
        

})







app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))