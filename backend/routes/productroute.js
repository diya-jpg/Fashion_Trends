const productcontroller=require("../controllers/Products/getproductcontroller");
const express=require("express");
const router=express.Router();
router.get("/",productcontroller);
module.exports=router;