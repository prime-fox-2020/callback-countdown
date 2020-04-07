const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, seconds) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if (minute == 0 && seconds == 0) {
    console.log(chalk.red(figlet.textSync(`${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`)));
    console.log(chalk.red(figlet.textSync("Time Out")));
  } 
  else console.log(chalk.cyan(figlet.textSync(`${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}`)));
  // Your code here...
};

module.exports = { displayCountdown };
