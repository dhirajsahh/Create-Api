const router = require("express").Router();
const product = require("../models/ProductSchema");
router.get("/", async (req, res) => {
  const Product = await product.find(req.query).sort("price");

  res.json(Product);
});
module.exports = router;
