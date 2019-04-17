require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", hbs);

app.get("/", (req, res) => {
    res.render("home.hbs");
});

app.listen(process.env.PORT, () => {
    console.log("app run at http://localhost:" + process.env.PORT);
});