const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let result = '';

  if (Math.floor(seconds / 60) < 10) {
    result += `0${Math.floor(seconds / 60)}:`
  } else {
    result += `${Math.floor(seconds / 60)}:`
  }

  if (seconds % 60 < 10) {
    result += `0${seconds % 60}`;
  } else {
    result += `${seconds % 60}`
  }

  console.log(chalk.cyan(figlet.textSync(result)))
};

module.exports = { displayCountdown };
