var http = require("http");

http.get("http://strefakursow.pl", function (res) {
  console.log(res.statusCode);
});
