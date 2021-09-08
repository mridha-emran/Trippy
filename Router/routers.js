const express = require("express")
const router = express.Router()
const { getHotel, getHotelId, addHotel,} = require("../controller/hotelControllers")

router.get("/", getHotel)
router.get("/:id",getHotelId)
router.post("/", addHotel)

module.exports = router