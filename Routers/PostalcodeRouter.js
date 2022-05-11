const express = require('express');
const router = express.Router();
const postalcodemoudle = require("../Modules/postalcodemodule");

router.get('/getpostalcode',postalcodemoudle.getpostalcode);


module.exports = router;