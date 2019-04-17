const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const userAPi = require("./apiUser"); // import user logic module

/* ------------------------------------------------------
          this router only serves pages !!! 
          some routes interact with our userAPI 
------------------------------------------------------- */ 

router.get("/", (req, res) => {
  res.redirect("home"); // indicates a routeName where you want to be redirected !
});

router.get("/home", (req, res) => {
  res.render("home.hbs"); // render the html out of this .hbs template file
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard.hbs");
});

router.get("/dashboard/create-user", (req, res) => {
  res.render("dashboard.hbs", {
    isForm: true,
    msg: res.locals.flashMessage
  });
});

router.get("/dashboard/user/:id/details", (req, res) => {
  userAPi
    .getOne(req.params.id)
    .then(user => {
      res.render("userDetails.hbs", { user });
    })
    .catch(err => {
      res.render("userDetails.hbs", { msg: "db problem" });
    });
});

router.get("/dashboard/list-users", (req, res) => {
  userAPi
    .getAll()
    .then(users => {
      res.render("dashboard.hbs", {
        users,
        isBoard: true,
        msg: res.locals.flashMessage
      });
    })
    .catch(dbErr => {
      res.render("dashboard.hbs", {
        msg: { status: "error", txt: "db error" },
        isBoard: true,
        msg: res.locals.flashMessage
      });
    });
});

router.post("/user", (req, res) => {
  userAPi
    .create(req.body)
    .then(dbSuccess => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! user successfully created"
      };
      res.redirect("/dashboard/create-user");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! database issue while creating user",
        details: dbError
      };
      res.redirect("/dashboard/create-user");
    });
});

router.get("/user/delete/:id", (req, res) => {
  userAPi
    .deleteOne(req.params.id)
    .then(dbRes => {
      req.session.flashMessage = {
        txt: "Yay ! User deleted successfully",
        status: "success"
      };
      res.redirect("/dashboard/list-users");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "database error",
        status: "Oh no ! A database error occured while deleting the user"
      };
      res.redirect("/dashboard/list-users");
    });
});

module.exports = router;
