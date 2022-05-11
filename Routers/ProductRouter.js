const express = require('express');
const router = express.Router();
const productmodule = require('../Modules/productModule');


router.get('/getproduct',productmodule.getproduct);
router.get('/getproductbyid/:productid',productmodule.getproductbyid);
router.post('/addproduct',productmodule.addproduct);
router.patch('/updateproduct/:productid',productmodule.updateproduct);
router.delete('/deleteproduct/:productid',productmodule.deleteproduct);

module.exports = router;  