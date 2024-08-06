
const mongoose=require("mongoose");
const ProductCollection=require("../../models/ProductSchema");

const getproductcontroller=async(req,res)=>{
    try{
        const product=await ProductCollection.find();
    res.status(200).send(product)
    }
    catch(err){
        res.status(504).send({
            message:"Error fetching products"
        });
        console.log(`Error occured :${error}`);
    }
};
module.exports=getproductcontroller;