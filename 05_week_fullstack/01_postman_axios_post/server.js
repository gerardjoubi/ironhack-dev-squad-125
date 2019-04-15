require("dotenv").config();
// here we fecth all key/value pairs contained in our .env config file
const hbs = require("hbs");
const express = require("express");
const app = express();
const parser = require("body-parser");
const products = [];

/** global config middlewares ^^ */
/** req incomming => middleware (functions execution) => response sent back  */
app.use(parser.json());
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.set("view engine", hbs);
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
  res.redirect("product-form");
});

app.get("/product-form", (req, res) => {
  const data = {
    scripts: ["form_product.js", "list_products.js"]
  };
  res.render("form-product.hbs", data);
});

app.get("/api/products/", (req, res) => {
  res.send(products);
});

app.post("/api/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send("ok");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("runs @ http://localhost:" + listener.address().port);
});
