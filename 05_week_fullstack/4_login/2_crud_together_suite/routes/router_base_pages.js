const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

router.get("/", (req, res) => {
  res.redirect("home"); // indicates a routeName where you want to be redirected !
});

router.get("/home", (req, res) => {
  res.render("home"); // render the html out of this .hbs template file
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
