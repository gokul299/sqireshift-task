const mongoose= require("mongoose");

const Schema=mongoose.Schema;
const PostalcodeSchema= new Schema({
    postal_coder:{type:Number,minlength:1,maxlength:50, required:true},
    distance_in_kilometersr:{type:Number, required:true},
});

const postalcodeModel= mongoose.model('postalcodeModel', PostalcodeSchema,'postal code');

module.exports = postalcodeModel;