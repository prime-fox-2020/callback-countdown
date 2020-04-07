const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minute  = Math.floor(seconds/60)
  let second = seconds - minute*60
  let minuteStr = minute.toString()
  let secondStr = second.toString()
  if (minute < 10) minuteStr = `0${minute}`
  if (second < 10) secondStr = `0${second}`
  console.log(chalk.red(figlet.textSync(`${minuteStr} : ${secondStr}`)));
};

module.exports = { displayCountdown };
