require("dotenv").config(); // get env variable for easy dev AND deployment
require("./models/db_connection"); // database initial setup
const express = require("express"); // import this node framework
const app = express(); // execute express and get an app out of it !
const bodyParser = require("body-parser"); // middleware to get data out of http requests body
const hbs = require("hbs"); // template engine import
const session = require("express-session"); //sessions make data persist between http calls
const sessionStore = new session.MemoryStore(); // mandatory for flashMessage
const User = require("./models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

/** 
 * setup session 
 * used for login AND flashMessage after page redirection
 * 
*/
app.use(
  session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: true,
    secret: "mySüperS3cr3tSh0uüÜlB3H4rd2Cr@@@ck|"
  })
);

/** setup app */
app.use(bodyParser.json());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


/** login tools config */
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
    console.log("@deserialize")
  User.findById(id, (err, user) => {
    if (err) {
      console.log("error deserializeUser", err);
      return cb(err);
    }
    console.log("valid logged user", err);
    cb(null, user);
  });
});

// {
//       passReqToCallback: true,
//       usernameField: "email",
//       passwordField: "password"
//     },

passport.use(
  new LocalStrategy({
      usernameField: "email",
      passwordField: "password"
    }, 
    function(username, password, done) {
    // ...
    // console.log(username, passport);

    User.findOne({ email: username }, (err, user) => {
      if (err) {
        console.log("db error", err);
        return done(err);
      }
      if (!user) {
        console.log("no user");
        return done(null, false, { message: "Incorrect username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        console.log("no good password");
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    });
    })
);


// custom routers
const basePagesRouter = require("./routes/router_base_pages");
const dashboardUserRouter = require("./routes/router_dashboard_user");
const authRouter = require("./routes/router_auth");
const dashboardProductRouter = require("./routes/router_dashboard_product");
const dashboardCategoryRouter = require("./routes/router_dashboard_category");
const dashboardPackRouter = require("./routes/router_dashboard_pack");
const apiUser = require("./routes/api_user");
const apiProduct = require("./routes/api_product");
const apiCategory = require("./routes/api_category");


/** HBS setup + helpers  */
hbs.registerPartials(__dirname + "/views/partials");
// the ternary function below add the ternary operator functionnality to hbs
// usage : {{ternary true "yay" "nay "}} => prints yay
// usage : {{ternary NaN "yay" "nay "}} => prints nay
hbs.registerHelper("ternary", (test, yes, no) => test ? yes : no);


// CUSTOM MIDDLEWARE (must be placed before app.routers)
// flashMessageCatcher -- from Ethan Brown's book, 'Web Development with Node & Express'
app.use(function flashMessageCatcher(req, res, next) {
  // if there's a flash message in the session request...
  // make it available in the response, then delete it
  res.locals.flashMessage = req.session.flashMessage;
  delete req.session.flashMessage;
  next();
});

/* link the routers to the app */
/* BASE PAGES */
app.use(basePagesRouter);
app.use(authRouter);
/* HTML PAGES ROUTERS */
app.use("/dashboard/user/", dashboardUserRouter);
app.use("/dashboard/product/", dashboardProductRouter);
app.use("/dashboard/category/", dashboardCategoryRouter);
app.use("/dashboard/pack/", dashboardPackRouter);
/* DATA ACCESS API */
app.use("/api/product/", apiProduct.router);
app.use("/api/user/", apiUser.router);
app.use("/api/category/", apiCategory.router);


// CUSTOM MIDDLEWARE 
// 404 not found handler => redirects any 404 to one error page
// !!! warning !!!
// ===> this should be placed AFTER every app routes !
// app.use(function handle404(req, res, next) {
//   res.status(404).render("page_not_found");
//   next();
// });

const listener = app.listen(process.env.PORT, () => {
  console.log(
    `app started at ${process.env.PROTOCOL}://${process.env.DOMAIN}:${
      listener.address().port
    }`
  );
});
