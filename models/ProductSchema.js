const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: [true, "companyname is required"],
    },
    url: {
      type: String,
    },
    featured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
