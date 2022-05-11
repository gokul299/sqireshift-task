const mongoose= require("mongoose");

const Schema=mongoose.Schema;
const ProductSchema= new Schema({
    name:{type:String,minlength:1,maxlength:50, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String,minlength:5,maxlength:500, required:true},
    discount_percentage: {type:Number, required:true},
    weight_in_grams: {type:Number, required:true}
});

const productModel= mongoose.model('productModel', ProductSchema,'products');

module.exports = productModel;