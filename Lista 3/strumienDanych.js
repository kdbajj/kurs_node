var http = require("http");

http.get("http://strefakursow.pl", (res) => {
  res.on("data", function (data) {
    console.log(data.toString());
    //console.log(data);
    console.log("test");
  });
});
