const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = second => {
  clear();
  if (second == 0) {
    console.log(chalk.blue(figlet.textSync("Time is up!")));
  } else {    
    console.log(chalk.red(figlet.textSync(second)));
  }
};

module.exports = { displayCountdown };
