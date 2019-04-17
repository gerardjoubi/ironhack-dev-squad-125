require("dotenv").config();
require("./models/db_connection");

const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();
const pageRouter = require("./routes/pageRouter");
const userRouter = require("./routes/userRouter");

/** setup app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", hbs);
hbs.registerPartials(__dirname + "/views/partials");

app.use(pageRouter);
app.use("/api/user/", userRouter);

app.listen(process.env.PORT, () => {
  console.log("app started at http://localhost:" + process.env.PORT);
});