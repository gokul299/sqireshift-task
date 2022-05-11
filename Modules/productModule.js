const Product = require('../Models/productmodel');
const joi = require('joi');


//.....create product......//
exports.addproduct = async (req,res,next) => {

    const schema = joi.object({
       name:joi.string().min(1).max(50).required(),
       price:joi.number(),
       category:joi.string().min(5).max(25).required(),
       image:joi.string().required(),
       description:joi.string().min(10).max(100).required(),
       discount_percentage:joi.number().required(),
       weight_in_grams:joi.number().required()
    })
    //.....joi validate.....//
    var {error} = await schema.validate(req.body);
    if(error){
        console.log(error)
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
   //.....save data in mongodb.....//   
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image,
        description:req.body.description,
        discount_percentage:req.body.discount_percentage,
        weight_in_grams:req.body.weight_in_grams
    })
    try{
        var responce = await product.save();
        res.send(responce)
    }catch(err){
        res.status(400).send(err)
    }
}



//..... get product .....//
exports.getproduct = async(req,res,next) =>{
    const responce = await Product.find();
    res.send(responce);
}



//..... get productby id .....//
exports.getproductbyid = async(req,res,next) =>{
    
    const productid = req.params.productid
 try {
     const product = await Product.findOne({_id : productid})
     res.send(product)
 } catch (error) {
     return res.status(400).json({ message: error }); 
 }
}


//..... update product .....//
exports.updateproduct = async (req,res,next)=>{ 
    const productid = req.params.productid;
    const response = await Product.findOneAndUpdate({_id: productid},{
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image,
        description:req.body.description,
        discount_percentage:req.body.discount_percentage,
        weight_in_grams:req.body.weight_in_grams
    });
    res.send(response);
} 



//..... delete product ......//
exports.deleteproduct = async (req,res,next)=>{
    const productid = req.params.productid;
    const response = await Product.findByIdAndRemove({_id: productid})
    res.send(response);
}


