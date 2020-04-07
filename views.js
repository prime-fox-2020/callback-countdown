const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let num = seconds
  let mm = Math.floor(num / 60)
  let dd = Math.floor(num % 60) > 9 ? Math.floor(num % 60) : '0' + Math.floor(num % 60).toString()
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(mm + ':' + dd)
};

module.exports = { displayCountdown };
