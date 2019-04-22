const express = require("express");
const router = new express.Router();

const passport = require("passport");
const userAPI = require("./api_user");

const ensureLogin = require("connect-ensure-login");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/register", (req, res) => {
  const { email, name, lastname, age } = req.body;
  var password = req.body.password;

  userAPI.getBy({ email: req.body.email }).then(checkMail => {
    if (checkMail) {
        console.log("readdyyy")
      const msg = {
        txt: "This email is already registered in database",
        status: "warning"
      };
      res.render("auth/register", msg);
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, bcryptSalt); // 10 here is the hash salt
    // https://en.wikipedia.org/wiki/Salt_(cryptography)

    userAPI
      .create({ name, lastname, email, password: hashPass, age })
      .then(dbRes => {
        // console.log(dbRes);
        const msg = {
          txt: "Congrats ! You registered successfully",
          status: "success"
        };
        res.render("auth/register", msg);
      })
      .catch(dbErr => {
        // console.log(dbErr);
        const msg = {
          txt: "Oh no ! A database error occured while registering",
          status: "error",
          details: dbErr
        };
        res.render("auth/register", msg);
      });
  });
});

router.post("/login", passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/login?error=yes",
      failureFlash: true,
      passReqToCallback: true
    })
);


/*
router.post("/login",  function (req, res, next) {
    // call passport authentication passing the "local" strategy name and a callback function
    passport.authenticate('local', function (error, user, info) {
      // this will execute in any case, even if a passport strategy will find an error
      // log everything to console
      console.log(error);
      console.log(user);
      console.log(info);

      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info);
      } else {
        next();
      }

      res.status(401).send(info);
    })(req, res);
});

*/
module.exports = router;
