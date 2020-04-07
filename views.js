const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let second = seconds % 60
  let minute = Math.floor(seconds / 60)
  if (seconds < 10) {
  second = '0' + seconds
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (seconds > 0){
    console.log(chalk.red(figlet.textSync(`${minute} : ${second}`)))
  } else {
    console.log(chalk.red(figlet.textSync(`${minute} : ${second}`)))
    console.log(chalk.red(figlet.textSync(`Time's up !!`)))
  }
}


module.exports = { displayCountdown };
