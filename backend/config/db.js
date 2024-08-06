const mongoose=require("mongoose")
const connectDB=async(req,res)=>{
try{
await mongoose.connect(process.env.MONGO_URL);
// res.status(200).send({
//     message:"Database connected",

// })
console.log("Database is connected successfully".bgGreen.white);
}
catch(error){
// res.status(504).send({
//     message:`Internal server error${error}`,
//     success:false,
//     description:"Database Not Connected"
// });
console.log(`Error occurs ${error}`.bgRed.white);
}
};
module.exports=connectDB