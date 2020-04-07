const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minute = Math.floor(seconds/60)
  if (minute < 10){
    minute = '0' + minute
  }

  let second = (seconds % 60)
  if (second < 10){
    second = '0' + second
  }
  console.log(chalk.cyan(figlet.textSync(`${minute}:${second}`)));

  // console.log(`${minute}:${second}`)
};

module.exports = { displayCountdown };
