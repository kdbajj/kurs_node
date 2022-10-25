var fs = require("fs");

fs.readdir("./acbghdf", function (error, fileList) {
  console.log(fileList);
});
