const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit = Math.floor(seconds / 60).toString()
  let detik = (seconds % 60).toString()

  if (menit.length === 1) menit = '0 ' + menit
  if (detik.length === 1) detik = '0 ' + detik

  console.log(chalk.red(figlet.textSync(`${menit} : ${detik}`)));
};

module.exports = { displayCountdown };
