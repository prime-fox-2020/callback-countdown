const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = second => {
  clear();
  console.log(chalk.red(figlet.textSync(second)));
  // console.log(second);
  if (second == 0) {
    console.log("Selesai");
  }
};

module.exports = { displayCountdown };
