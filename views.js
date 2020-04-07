const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let min = 0;
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if (seconds >= 60) min = Math.floor(seconds/60); seconds -= min*60;
  if (min < 10) min = `0${min}`;
  if (seconds < 10) seconds = `0${seconds}`;

  console.log(`${min}:${seconds}`);
};

module.exports = { displayCountdown };
