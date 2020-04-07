const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (seconds) => {
  let menit = Math.floor(seconds / 60);
  let detik = seconds - menit * 60;
  if (detik < 10 && seconds < 10) {
    clear();
    console.log(chalk.red(figlet.textSync("Countdown App")));
    console.log(chalk.red(figlet.textSync("0" + menit + " : 0" + detik)));
  } else if (detik < 10) {
    clear();
    console.log(chalk.blue(figlet.textSync("Countdown App")));
    console.log(chalk.blue(figlet.textSync("0" + menit + " : 0" + detik)));
  } else {
    clear();
    console.log(chalk.blue(figlet.textSync("Countdown App")));
    console.log(chalk.blue(figlet.textSync("0" + menit + " : " + detik)));
  }
};

module.exports = { displayCountdown };
