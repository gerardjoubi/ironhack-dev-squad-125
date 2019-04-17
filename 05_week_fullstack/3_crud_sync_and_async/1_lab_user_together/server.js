require("dotenv").config();
require("./models/db_connection");

const express = require("express"); // import this node framework
const bodyParser = require("body-parser"); // middleware to get data of post requests
const hbs = require("hbs"); // template engine import
const app = express();
const session = require("express-session"); // use sessions to make data persist between http calls
const sessionStore = new session.MemoryStore();
const flash = require("express-flash"); // this lib allows to pass messages on redirect
// custom routers
const pageRouter = require("./routes/routerPage");
const userRouter = require("./routes/apiUser");

/** setup app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", hbs);
hbs.registerPartials(__dirname + "/views/partials");

app.use(
  session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: "true",
    secret: "mySüperS3cr3tSh0uuulB3H4rd2Cr@ck"
  })
);

// Custom flash middleware -- from Ethan Brown's book, 'Web Development with Node & Express'
app.use(function flasMessageCatcher(req, res, next) {
  // if there's a flash message in the session request...
  // make it available in the response, then delete it
  res.locals.flashMessage = req.session.flashMessage;
  delete req.session.flashMessage;
  next();
});

/** link the routers to the app */
app.use(pageRouter);
app.use("/api/user/", userRouter.router);

const listener = app.listen(process.env.PORT, () => {
  console.log("app started at http://localhost:" + listener.address().port);
});
