const router = require("express").Router();
const product = require("../models/ProductSchema");
router.get("/", async (req, res) => {
  const productlist = await product.find();
  res.json({
    product: productlist,
  });
  // console.log(productlist);
});
module.exports = router;
