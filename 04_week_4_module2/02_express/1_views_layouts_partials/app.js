const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");

// public folder for static assets (styles, images, browser scripts)
app.use(express.static("public"));
app.use(bodyParser.urlencoded()); // mandatory to parse the body of post request !
app.use(bodyParser.json()); // mandatory to parse the body of post request !

// setup folder for view rendering
app.set("views", __dirname + "/views");
// our express app uses now hbs as default engine to render views ...
app.set("view engine", "hbs");
// setup hbs folder for partial views (small dynamic html modules)

hbs.registerPartials(__dirname + "/views/partials");
// create a frontend (in public...) @ click on a button, make the studentList disappear... :)
// first get route (index, home...)

app.get("/", (req, res) => {
  const data = {
    yang: "hello squad",
    boolRes: 1 < 20,
    myMood: Math.random() > 0.5 ? "happy mood" : "bad mood",
    markup: "<span>IronHack Module 2</span>",
    students: [
      { name: "foo", age: 23 },
      { name: "baroo", age: 40 },
      { name: "baz", age: 33, email: "baz@baz.com" },
      { name: "baz", age: 33, email: "baz@baz.com" }
    ]
  };
  // #hint : instruction below renders and sends views/index.hbs for browser display
  // res.render("index");
  res.render("index.hbs", data);
});

// second get route serves an about page
app.get("/about", (req, res) => {
  const data = {
    title: "About",
    squadNumber: 125,
    students: [
      { name: "foo", age: 23 },
      { name: "baroo", age: 40 },
      { name: "baz", age: 33, email: "baz@baz.com" },
      { name: "baz", age: 33, email: "baz@baz.com" },
    ]
  };
  res.render("about", data);
});


// third get route sends a contact form back to browser
app.get("/contact", (req, res) => {
  // console.log(req.query)
  // console.log(req.query.name, req.query.message)
  const data = {
    title: "Contact"
  };
  res.render("contact", data);
});

// ***********************
// lil' post adventure
// ***********************
app.post("/contact", (req, res) => {
  // console.log(req.query)
  // console.log("posted data: ", req.body)
  const {name, email, subject, message } = req.body; // es6 destructuring syntax ;)
  console.log(name, subject, message); // we took values out of req.body and assigned them to separate var for later use...
  res.status(200).send("little post adventure will continue ;)");
});

app.get("/user/:username", (req, res, next) => {
  res.send(req.params);
});

const listener = app.listen(7780, () => {
  console.log("app/hbs started @ http://localhost:" + listener.address().port);
});