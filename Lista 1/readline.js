var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Jak masz na imię?", function (answer) {
  rl.setPrompt("Jaki jest twój ulubion język programowania" + answer + "?");
  rl.prompt();
  rl.on("line", function (language) {
    console.log(language);
  });
});
