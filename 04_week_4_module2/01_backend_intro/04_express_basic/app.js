const express = require("express");// let's include the framework in our codebase
const app = express(); // app is an object returned by the express func execution

// app sets public folder ressources as accessible : mandatory if clients must access some static resources, such as images or css and front end scripts...
app.use(express.static("public"));
// app.use(express.static(__dirname + "/public"));

// on the base route (http://localhost:3010/), listen to get request coming from server
app.get("/", (request, response) => { // clbk parameters are mandatory
  response.send("<h1>hello world</h1>");
});

app.get("/home", (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`);
});

app.get("/about", (req, res) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/page", (request, response) => {
  response.send(`
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>cool page</title>
        <link rel="stylesheet" href="/styles/styles.css" />
    </head>
    <body>
        <h1>Hello page</h1>
        <img src="/images/bg.jpg" style="max-width:100vh"/>
    </body>
    </html>
  `);
});

app.listen(8888, () => {
  console.log("my app started @ http://localhost:8888");
});
