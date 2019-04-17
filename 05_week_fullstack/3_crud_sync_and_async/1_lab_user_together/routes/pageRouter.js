const express = require("express");
const axios = require("axios");
const router = new express.Router();
const url = `http://${process.env.domain}:${process.env.PORT}`;
// console.log(url);
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
  const msg = {txt: req.query.msg, status: req.query.status};
  res.render("dashboard.hbs", { isForm: true, msg });
});

router.get("/dashboard/user/:id/details", (req, res) => {
  res.send("hey !!!")
})

router.get("/dashboard/list-users", (req, res) => {
  axios
    .get(`${url}/api/user/all`)
    .then(dbRes => {
      // if the db call is successfull
      // console.log(dbRes)
      res.render("dashboard.hbs", { users: dbRes.data, isBoard: true });
      // pass the users to the views
    })
    .catch(dbErr => {
      // console.log(dbErr);
      res.render("dashboard.hbs", {
        msg: { status: "error", txt: "db error" },
        isBoard: true
      });
    });
});

router.post("/user/create", (req, res) => {
  axios
    .post(`${url}/api/user/create`, req.body)
    .then(dbRes => {
      res.redirect("/dashboard/create-user?msg=yay&status=success");
    })
    .catch(dbErr => {
      res.redirect("/dashboard/create-user?msg=error&status=error");
    });
});

module.exports = router;
