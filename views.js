const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
 
  if (seconds == 0) {
    console.log(chalk.cyan(figlet.textSync("Selamat Tahun Baru")));
  } else if (sec < 10 && min < 10) {
    console.log(chalk.cyan(figlet.textSync(`0${min} : 0${sec}`)));
  } else if (sec >= 10 && min < 10) {
    console.log(chalk.cyan(figlet.textSync(`0${min} : ${sec}`)));
  } else if (sec < 10 && min >= 10) {
    console.log(chalk.cyan(figlet.textSync(`${min} : 0${sec}`)));
  } else if (sec >= 10 && min >= 10) {
    console.log(chalk.cyan(figlet.textSync(`${min} : ${sec}`)));
  }
};

module.exports = { displayCountdown };
