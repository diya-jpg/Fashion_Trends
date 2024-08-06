const rootcontroller=require("../controllers/rootcontrollers");
const express=require("express");
const router=express.Router();
router.get("/",rootcontroller);
module.exports=router;