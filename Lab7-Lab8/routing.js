app.get("/", function (req, res) {
  res.send("Strona Start");
});

app.get("/", function (req, res) {
  res.send("Strona Kontakt");
});
app.get("/", function (req, res) {
  res.send("Strona Produkt");
});
app.listen(3000);
