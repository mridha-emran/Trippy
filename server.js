const express = require("express");
const app= express();
const Hotels= import("./data/hotel")
const resturents=import("./data/resturent")
const PORT=8000;





app.listen(PORT,()=>( console.log(`this server listing port:${PORT}`)))