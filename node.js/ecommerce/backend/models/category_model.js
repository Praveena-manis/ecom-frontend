const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
//used category schema for category
name:{
    type:String,
}
},{timestamps:true});
const categoryModel=mongoose.model("categoryModel",categorySchema);
module.exports=categoryModel;