const Postalcode = require("../Models/postalcodemodel");


exports.getpostalcode = async (req, res) => {
    if (Postalcode.length > 0) {
      const result = await Postalcode.find(req.query.postal_coder);
      if (result.status === "error") res.status(400).send(result);
      else res.status(200).send(result);
    } else res.status(200).send("Invalid Postal Code");
  };