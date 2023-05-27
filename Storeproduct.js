const connectdb = require("./config/connectMongodb");
const productSchema = require("./models/ProductSchema");
const product = require("./product.json");
const start = async () => {
  try {
    await connectdb();
    await productSchema.create(product);
  } catch (error) {
    console.log(error);
  }
};
start();
