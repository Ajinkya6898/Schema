const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    foundername: { type: String, required: true },
    category: { type: String, required: true },
    formedYear: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Brand = mongoose.model("brand", brandSchema);
module.exports = Brand;
