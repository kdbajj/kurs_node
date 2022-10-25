var fs = require("fs");

fs.readdir("./ acdssda", function (error, fileList) {
  console.log(error);
  console.log(fileList);
});
