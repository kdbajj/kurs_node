var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Witaj w Expressjs");
});

app.get("/", function (req, res) {
  res.send("Strona Start");
});

app.get("/contact", function (req, res) {
  res.send("Strona Kontakt");
});
app.get("/product/*", function (req, res) {
  res.send("Strona Produkt");
});
app.listen(3000);
