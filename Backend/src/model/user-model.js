const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    addresses: [
      {
        flatNo: { type: String, required: false },
        area: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
