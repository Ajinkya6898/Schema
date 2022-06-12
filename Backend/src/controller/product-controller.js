const express = require("express");
const router = express.Router();
const Product = require("../model/product.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});
module.exports = router;
