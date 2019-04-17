const express = require("express");
const hbs = require("hbs");
const server = express();

server.use(express.static(__dirname + "/public"));
server.set("views", __dirname + "/views");
server.set("view engine", hbs);
hbs.registerPartials(__dirname + "/views/partials");

server.get("/", (req, res) => {
  res.redirect("home");
});

server.get("/home", (req, res) => {
  res.render("home.hbs");
});

server.get("/toto", (req, res) => {
  res.render("home.hbs", {time : Date.now()});
});

server.listen(2020, () => {
  console.log("app started !!!");
});
