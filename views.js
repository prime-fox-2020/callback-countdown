const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (seconds, minute = 0) => {
  clear();

  // Your code here...
    console.log(chalk.blue(figlet.textSync(`Countdown Timer:`)));
  if (minute < 10 && seconds < 10) {
    console.log(chalk.red(figlet.textSync(`0${minute} : 0${seconds}`)));
  } else if (seconds < 10) {
    console.log(chalk.red(figlet.textSync(`${minute} : 0${seconds}`)));
  } else if (minute < 10) {
    console.log(chalk.red(figlet.textSync(`0${minute} : ${seconds}`)));
  }
  if(minute == 0 && seconds == 0){
    console.log(chalk.green(figlet.textSync(`Waktu habis`)));
  }
};

module.exports = { displayCountdown };
