const express = require("express");
const Brand = require("../model/brands-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().lean().exec();
    return res.status(200).send(brands);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    return res.status(201).send(brand);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    return res.status(200).send(brand);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(brand);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    return res.status(200).send(brand);
  } catch (err) {
    return res.status(500).send({ Message: err.message });
  }
});

module.exports = router;
