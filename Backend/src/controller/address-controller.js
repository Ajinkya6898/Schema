const express = require("express");
const Address = require("../model/address-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find().lean().exec();
    res.json(addresses);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const address = await Address.create(req.body);
  address
    .save()
    .then(() => {
      res.status(201).send(address);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
