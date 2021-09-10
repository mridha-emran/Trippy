const express = require("express")
const router = express.Router()
const { getHotel, getHotelId, addHotel,changeHotel,deleteHotel} = require("../controller/hotelControllers")

router.get("/", getHotel)
router.get("/:id",getHotelId)
router.post("/", addHotel)
router.put("/:id",changeHotel)
router.delete("/:id",deleteHotel)

module.exports = router