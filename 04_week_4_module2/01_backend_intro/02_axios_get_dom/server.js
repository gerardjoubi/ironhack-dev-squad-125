const http = require("http");
// tuto cors https://bigcodenerd.org/enable-cors-node-js-without-express/


const goodMovies = [
  { title: "The Shining", director: "Stanley Kubrick", releaseDate: 1980 },
  { title: "Stalker", director: "Andreï Tarkovski", releaseDate: 1979 },
  { title: "US", director: "Jordan Peele", releaseDate: 2019 }
];

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000 // 30 days
    /** add other headers as per requirement */
  };
  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }
  if (["GET", "POST"].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    res.end(JSON.stringify(goodMovies));
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
});

server.listen(3005);
