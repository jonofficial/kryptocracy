const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/votingpoll1.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log("server: "+ portNumber);