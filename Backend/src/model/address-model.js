const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    flatNo: { type: String, required: true },
    appartmentName: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Address = mongoose.model("address", addressSchema);
module.exports = Address;
