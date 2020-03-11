//
const express = require("express");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const port = 5000;
const app = express();
app.listen(port, function() {
  console.log("server running on port " + port);
});

app.get("/", (req, res) => {
  res.send("hello??");
});

app.get("/chuckfacts", (req, res) => {
  var chuckreq = new XMLHttpRequest();

  chuckreq.open("GET", "https://api.chucknorris.io/jokes/random", true);
  console.log(chuckreq.status);
  chuckreq.onload = function() {
    var a = JSON.parse(this.responseText);
    res.send(a.value);
    console.log(a.value);
  };
  chuckreq.send();
});
