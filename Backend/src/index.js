const express = require("express");
const app = express();

const connect = require("./configs/db");
app.use(express.json());

const usercontroller = require("./controller/user-controller");
app.use("/users", usercontroller);

const brandcontroller = require("./controller/brand-controller");
app.use("/brands", brandcontroller);

const productcontroller = require("./controller/product-controller");
app.use("/products", productcontroller);

app.listen(3500, async () => {
  try {
    await connect();
    console.log("listening on port 3500");
  } catch (err) {
    console.log(err.message);
  }
});
