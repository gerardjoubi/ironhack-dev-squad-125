const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const productAPI = require("./api_product"); // import product logic module

router.get("/manage", (req, res) => {
    res.render("dashboard_category", {
      scripts: ["board_category.js"]
    });
});


module.exports = router;