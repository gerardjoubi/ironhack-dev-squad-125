const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const productAPI = require("./api_product"); // im

router.get("/manage", (req, res) => {
  res.render("dashboard_packs", {
    scripts: ["board_packs.js"]
  });
});

module.exports = router;