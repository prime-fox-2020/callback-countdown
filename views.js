const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let dd = seconds%60;
  let mm = Math.floor(seconds/60)
  
  if (mm < 1) {
    if (dd < 10) {
      if (seconds == 0) {
        console.log(chalk.cyan(figlet.textSync(`00:0${dd}`)));
        console.log(chalk.cyan(figlet.textSync('Selesai')));
        // return 'Selesai';
      }
      else {
        console.log(chalk.cyan(figlet.textSync(`00:0${dd}`)))
      }
    }
    else if (dd >= 10) {
      console.log(chalk.cyan(figlet.textSync(`00:${dd}`)));
    }
  }
  else if (mm >= 1) {
    if (dd < 10) {
      if (seconds == 0) {
        console.log(chalk.cyan(figlet.textSync(`0${mm}:${dd}`)));
        console.log(chalk.cyan(figlet.textSync('Selesai')));
        // return 'Time is up';
      }
      else {
        console.log(chalk.cyan(figlet.textSync(`0${mm}:${dd}`)))
      }
    }
    else if (dd >= 10) {
      console.log(chalk.cyan(figlet.textSync(`0${mm}:${dd}`)));
    }
  }
};

module.exports = { displayCountdown };
