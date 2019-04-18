require("dotenv").config();
require("./models/db_connection");

const express = require("express"); // import this node framework
const bodyParser = require("body-parser"); // middleware to get data of post requests
const hbs = require("hbs"); // template engine import
const app = express();
const session = require("express-session"); // use sessions to make data persist between http calls
const sessionStore = new session.MemoryStore();

// custom routers
const basePagesRouter = require("./routes/router_base_pages");
const dashboardUserRouter = require("./routes/router_dashboard_user");
const dashboardProductRouter = require("./routes/router_dashboard_product");
const dashboardCategoryRouter = require("./routes/router_dashboard_category");
const apiUser = require("./routes/api_user");
const apiProduct = require("./routes/api_product");
const apiCategory = require("./routes/api_category");

/** setup app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
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
app.use(function flashMessageCatcher(req, res, next) {
  // if there's a flash message in the session request...
  // make it available in the response, then delete it
  res.locals.flashMessage = req.session.flashMessage;
  delete req.session.flashMessage;
  next();
});

/** link the routers to the app */

app.use(basePagesRouter);
app.use("/dashboard/user/", dashboardUserRouter);
app.use("/dashboard/product/", dashboardProductRouter);
app.use("/dashboard/category/", dashboardCategoryRouter);
app.use("/api/product/", apiProduct.router);
app.use("/api/user/", apiUser.router);
app.use("/api/category/", apiCategory.router);

const listener = app.listen(process.env.PORT, () => {
  console.log("app started at http://localhost:" + listener.address().port);
});
