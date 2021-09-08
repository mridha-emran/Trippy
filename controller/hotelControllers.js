
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
    const idhotel = parseInt(req.params.id)
    const findId= hotelInfo.findOne({_id:idhotel})
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




module.exports ={
    getHotel,
    addHotel,
    getHotelId
}