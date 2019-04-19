require("dotenv").config();

const express = require("express"); // import this node framework
const fs = require("fs");
const app = express();

/* 
in express, middlewares are just functions 
they may be executed on a global app level with app.use(aMiddleWare)
or they may be executed on a route level with app.get("/a-route", aMiddleWare, (req, res) => {})
we also can chain these middlewares functions...
https://www.youtube.com/watch?v=9HOem0amlyg
*/

function nodeRocks(req, res, next) {
    console.log("nodeJS is so cool : )");
    next();
}

function logDate(req, res, next) {
    req.log = `new log @ ${req.method}${req.url} - ${Date.now()}`;
    console.log(req.log);
    next();
}

function registerLog(req, res, next) {
   fs.appendFile(__dirname + "/logs/logs.txt", req.log + "\n", err => {
     if (err) console.log(err);
     next();
   });
}

// app.use(nodeRocks);

app.get("/", (req, res) => {
    res.redirect("a");
});

app.get("/a", logDate, (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/b", logDate, registerLog, (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("app started at http://localhost:" + listener.address().port);
});
