const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    launchDate: { type: Number, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    review: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
