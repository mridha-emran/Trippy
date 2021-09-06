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
   // retrieve the index (where the hotel id is in the array)
    const findId = hotelInfo.findIndex(elem => elem.id === parseInt(hotelID))
   // retrieve the item from  hotel.
      const hotelName=hotelInfo[findId]
      // change the name of the hotel
      hotelName.name=hotelsQuery
    // select the index of my array and replace it with the new elements
    hotelInfo.splice(findId,1,hotelName)



     console.log("id", hotelName);
     console.log("Query", hotelsQuery);
        

   


        
        res.json({
            status:"ok",
            message:"data update",
            data:findId
        })
        

})

app.delete("/hotels/:id",(req,res)=>{
    
    const hotelID = req.params.id   
    const findId = hotelInfo.filter(elem => elem.id !== parseInt(hotelID))
      
        console.log(findId)
        res.json({
            status:"ok",
            message:"data update",
            data:findId
        })
        

})


app.get("/restaurants",(_req,res)=>{

    res.json({
		status: "OK",
		message:"data send",
        data: resturentInfo
	});

})

app.get("/restaurants/:id",(req,res)=>{
    const idrestaurant = parseInt(req.params.id)
    const findId= hotelInfo.find(elem => elem.id ===idrestaurant )
    res.json({
		status: "OK",
		message:"data send",
        data: findId
	});

})
app.post("/restaurants",(req,res)=>{
    const addresturant = req.body
    hotelInfo.push(addresturant)
    res.json({
		status: "OK",
		message:"data send",
        data: addresturant
	});

})

app.put("/restaurants/:id",(req,res)=>{
    
    const restaurantQuery = req.query.name
    const restaurantID = req.params.id
   
    const findId = resturentInfo.findIndex(elem => elem.id === parseInt(restaurantID ))
      const restaurantName=hotelInfo[findId]
      restaurantName.name=restaurantQuery
    
    resturentInfo.splice(findId,1,restaurantName)



     console.log("id", restaurantName);
     console.log("Query", restaurantQuery );
        

   


        
        res.json({
            status:"ok",
            message:"data update",
            data:findId
        })
        

})

app.delete("/restaurants/:id",(req,res)=>{
    
    // const resturantID = req.params.id   
    // const findId = hotelInfo.filter(elem => elem.id !== parseInt(resturantID))
      
    //     console.log(findId)
    //     res.json({
    //         status:"ok",
    //         message:"data update",
    //         data:findId
    //     })
        

    const resturanID = req.params.id
   
    const findId = resturentInfo.findIndex(elem => elem.id === parseInt(resturanID))
        
    resturentInfo.splice(findId,1)
       
        res.json({
            status:"ok",
            message:"data update",
            data:resturentInfo
        })

})







app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))