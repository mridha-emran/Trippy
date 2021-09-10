
const hotelInfo= require("../schemadata/hotel")

const getHotel=async (_req,res)=>{
    const hotels=await hotelInfo.find()
    res.json({
		status: "OK",
		message:"data send",
        data: hotels
	});

}
 const getHotelId=async(req,res)=>{
    const idhotel = req.params.id
    const findId= await hotelInfo.findOne({_id:idhotel})
    res.json({
		status: "OK",
		message:"data send",
        data: findId
	});
 }

const addHotel=async (req,res)=>{
    const addhotels =await hotelInfo.create(req.body)
    res.json({
		status: "OK",
		message:"data send",
        data: addhotels
	});

}

const changeHotel=async(req,res)=>{

    const hotelID = req.params.id
    if (hotelInfo) {
          const hotelsQuery=req.query.name
          await hotelInfo.findOneAndUpdate( {_id:hotelID},
            { $set: { name: hotelsQuery } })
        
            res.json({
                message: "The hotel's name is updated"
            })

        }
 
     
}

const deleteHotel=async(req,res)=>{
    const hotelID=req.params.id
    const removeHotel=await hotelInfo.deleteOne({_id:hotelID})
    if(hotelInfo){
        res.json({
            status:"ok",
            message:"data update",
            data:removeHotel
        })
    }
}



module.exports ={
    getHotel,
    addHotel,
    getHotelId,
    changeHotel,
    deleteHotel
}