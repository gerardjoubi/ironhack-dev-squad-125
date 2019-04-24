const express = require("express"); // get the frameworf to define Router
const router = new express.Router(); // setup a new router
const userAPI = require("./api_user"); // import user api for data manipulation
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt"); // bcrypt is a famous lib for data encryption
const bcryptSalt = 10; // the salt level defines the level of encryption

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  userAPI
    .getOne(id)
    .then(user => {
      cb(null, user);
    })
    .catch(err => {
      cb(err);
    });
  // User.findById(id, (err, user) => {
  //   if (err) return cb(err);
  //   cb(null, user);
  // });
});

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" }, // change default username credential to email
    function(email, passwd, next) {
      userAPI
        .getBy({ email })
        .then(user => {
          // db query success
          if (!user)
            return next(null, false, { message: "Incorrect username" });
          if (!bcrypt.compareSync(passwd, user.password))
            return next(null, false, {
              message: "Incorrect password"
            });
          else return next(null, user); // it's all good my friend !
        })
        .catch(dbErr => next(dbErr)); // if the db query fail...
    }
  )
);

function setFlashMessage(flash) {
  var msg;
  if (flash.length) {
    msg = {
      txt: flash[0],
      status: "warning"
    };
  }
  return msg;
}

router.get("/register", (req, res) => {
  res.render("auth/register", {
    msg: setFlashMessage(req.flash("error")),
    scripts: ["form_register.js"]
  });
});

router.get("/login", (req, res) => {
  res.render("auth/login", { msg: setFlashMessage(req.flash("error")) });
});

router.post("/register", (req, res) => {
  const { email, name, lastname, age, password } = req.body;

  userAPI.getBy({ email: req.body.email }).then(checkMail => {
    if (checkMail) {
      const msg = {
        txt: "This email is already registered in database",
        status: "warning"
      };
      return res.render("auth/register", { msg });
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    // more info : https://en.wikipedia.org/wiki/Salt_(cryptography)

    userAPI
      .create({ name, lastname, email, password: hashPass, age })
      .then(dbRes => {
        const msg = {
          txt: "Congrats ! You registered successfully",
          status: "success"
        };
        res.render("auth/register", { msg });
      })
      .catch(dbErr => {
        const msg = {
          txt: "Oh no ! A database error occured while registering",
          status: "error"
        };
        res.render("auth/register", { msg });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

module.exports = router;
