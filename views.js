const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let temp = seconds;
  let min = Math.floor(temp/60);
  temp-= min*60;

  if (temp ===0) {
    console.log(chalk.cyan(figlet.textSync("Waktu Habis")));
  }
  else if (min < 10 && temp < 10) {
    console.log(chalk.cyan(figlet.textSync(`${min}: ${temp}`)));
  }
  else if (temp>= 10 && min < 10) {
    console.log(chalk.cyan(figlet.textSync(`${min}: ${temp}`)));
  }
  else if (temp>= 10 && min < 10) {
    console.log(chalk.cyan(figlet.textSync(`${min}: ${temp}`)));
  }
  else {
    console.log(chalk.cyan(figlet.textSync(`${min}: ${temp}`)));
  }

};

module.exports = { displayCountdown };
