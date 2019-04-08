const http = require("http"); 
// node way to import dependecies is require(depName)
// the http module is part of node's core library, so we don't have to install it.

const server = http.createServer((request, response) => {
    response.write("Hello world of node !!!");
    response.end();
    // back to ./../02_axios_get . don't forget to study course content examples.
});

server.listen(9999, () => {
    console.log("server on")
});
