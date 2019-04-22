const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const ensureLogin = require("connect-ensure-login");

router.get("/", (req, res) => {
  res.redirect("home"); // indicates a routeName where you want to be redirected !
});

router.get("/home", (req, res) => {
  res.render("home"); // render the html out of this .hbs template file
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard/index");
});

// router.get("/dashboard", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("dashboard", { user: req.user });
// });

// put also contact form, about, legal pages here ...

module.exports = router;
