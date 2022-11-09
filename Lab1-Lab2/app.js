var fs = require("fs");

fs.readFile("./modules.txt", function (error, content) {
  console.log(content);
});
