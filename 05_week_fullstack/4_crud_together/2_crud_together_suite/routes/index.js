const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)


function ensureLogin(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

router.get("/", (req, res) => {
  res.redirect("home"); // indicates a routeName where you want to be redirected !
});

router.get("/home", (req, res) => {
  res.render("home"); // render the html out of this .hbs template file
});

router.get("/about", (req, res) => {
  res.render("about"); // render the html out of this .hbs template file
});

router.get("/dashboard", ensureLogin, (req, res) => {
  res.render("dashboard/index");
});


// you may also want to route contact form, about, legal pages here ...



module.exports = router;
