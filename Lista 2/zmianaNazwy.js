var fs = require("fs");

fs.unlink("footer.html", function (error) {
  if (error) {
    console.log(error);
  }
});

fs.rename("plik.xt", "readme.txt", function (error) {
  if (error) {
    console.log(error);
  }
});
