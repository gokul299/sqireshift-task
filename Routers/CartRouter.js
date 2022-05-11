const express = require('express');
const router = express.Router();
const cartmoudle = require("../Modules/cartmodule");

router.get('/getcart',cartmoudle.getCart);
router.post('/addcart',cartmoudle.addItemToCart);
router.delete('/deletecart',cartmoudle.deleteCart);

module.exports = router;