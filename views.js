const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.white.bold(figlet.textSync("TIME: ")));
  // Your code here...
  if(seconds==0){
    console.log(chalk.red.bold(figlet.textSync(`WAKTU HABIS!!`)));
  }else if(seconds >= 10 ) {
    console.log(chalk.yellow.bold(figlet.textSync(`00:${seconds}`)));
  }else{
    console.log(chalk.yellow.bold(figlet.textSync(`00:0${seconds}`)));
  }

};

module.exports = { 
  displayCountdown
};
