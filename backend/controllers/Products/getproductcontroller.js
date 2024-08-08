
const mongoose=require("mongoose");
const ProductCollection=require("../../models/ProductSchema");

const productcontroller=async(req,res)=>{
    try{
        const {category,name,subcategory,id}=req.params;
        let products;
     if(category){
const searchcategory=category.toLowerCase();
products=await ProductCollection.find({
    category:{$regex:new RegExp(searchcategory,"i")},
});
     }
     else if(name){
        const searchname=name.toLowerCase();
products=await ProductCollection.find({
    name:{$regex:new RegExp(searchname,"i")},
});  
     }
else if(subcategory) {
    const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.find({ sub_category: { $regex: new RegExp(searchSubcategory, 'i') } });
} 
else if(id) {
    //const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.find({ 
    _id:id});
} 
else if(req.path.includes("/random")) {
    //const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.aggregate([{ 
    $sample:{
        size:9
    },
},
]);
} 
else if(req.path.includes("/top-rated")) {
    //const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.find().sort({rating:-1}).limit(9);
} 
else if(req.path.includes("/lowtohigh")) {
    //const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.find().sort({new_price:1}).limit(5);
} 
else if(req.path.includes("/hightolow")) {
    //const searchSubcategory = subcategory.toLowerCase();
    products = await ProductCollection.find().sort({new_price:-1}).limit(5);
} 
else {
    products = await ProductCollection.find();
}

if (!products || products.length === 0) {
    res.status(404).send({ message: "No products found" });
} else {
    res.status(200).send(products);
}

console.log("Product fetched successfully");

    }

    catch(err){
        res.status(504).send({
            message:"Error fetching products"
        });
        console.log(`Error occured :${err}`);
    };
}
module.exports=productcontroller;