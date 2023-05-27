const router = require("express").Router();
const getallProduct = require("./Product");
const productTesting = require("./Producttesting");
router.use("/product", getallProduct);
router.use("/producttesting", productTesting);
module.exports = router;
