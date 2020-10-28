// NODE
const http = require("http");
const colors = require("colors");
const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello node.js!!");
});

server.listen(port, hostname, () => {
  console.log("Server on 0.0.0.0:3000".green);
});

// EXPRESS
// const express = require("express");
// const colors = require("colors");
// const app = express();
// const hostname = "0.0.0.0";
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Express.js!!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://${hostname}:${port}`.green);
// });
