const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let detik = seconds % 60
  detik < 10 ? detik = `0${detik}` : detik
  let menit = Math.trunc(seconds / 60)
  menit < 10 ? menit = `0${menit}` : menit
  console.log(chalk.cyan(figlet.textSync(`${menit} : ${detik}`)));
};

module.exports = { displayCountdown };