const express = require("express");
const axios = require("axios");
const router = new express.Router();
const url = `http://${process.env.domain}:${process.env.PORT}`;

/* this router only serves pages !!!  */

router.get("/", (req, res) => {
  res.redirect("home");
  // indicates a routeName where you want to jump to !
});

router.get("/home", (req, res) => {
  res.render("home.hbs");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard.hbs");
});

router.get("/dashboard/create-user", (req, res) => {
  res.render("dashboard.hbs", { isForm: true });
});

router.get("/dashboard/list-users", (req, res) => {
  axios.get(`${url}/api/user/all`)
  .then( dbRes => {
    console.log(dbRes)
    res.render("dashboard.hbs", { isBoard: true });
  })
  .catch( dbErr => {
    res.render("dashboard.hbs", { isBoard: true });
  })
});

router.post("/user/create", (req, res) => {
  axios
    .post(`${url}/api/user/create`, req.body)
    .then(dbRes => {
      res.render("dashboard.hbs", {
        isForm: true,
        msg: {
          txt: "yay !!! user created",
          status: "success"
        }
      });
    })
    .catch(dbErr => {
      res.render("dashboard.hbs", {
        isForm: true,
        msg: {
          txt: "nay !! database problem",
          status: "error",
          details: dbErr
        }
      });
    });
});

module.exports = router;
