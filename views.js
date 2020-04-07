const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let num = seconds
  let mm = Math.floor(num / 60)
  let dd = Math.floor(num % 60) > 9 ? Math.floor(num % 60) : '0' + Math.floor(num % 60).toString()
  let result = `Time:
  ***********
  ${mm}:${dd}`
  num <= 0 ? console.log(chalk.cyan(figlet.textSync("Waktu Habis!"))) : console.log(figlet.textSync(result))
};

module.exports = { displayCountdown };
