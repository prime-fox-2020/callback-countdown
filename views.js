const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let temporarySec = seconds
  let temporaryMin = Math.floor(temporarySec / 60)
  temporarySec -= temporaryMin*60
  if(seconds === 0){
    console.log(chalk.cyan(figlet.textSync(`Waktu Habis`)));
  }
  else if(temporarySec < 10 && temporaryMin < 10){
    console.log(chalk.cyan(figlet.textSync(`0${temporaryMin}:0${temporarySec}`)));
  }
  else if(temporaryMin >= 10 && temporarySec < 10){
    console.log(chalk.cyan(figlet.textSync(`${temporaryMin}:0${temporarySec}`)));
  }
  else if(temporaryMin < 10 && temporarySec >= 10){
    console.log(chalk.cyan(figlet.textSync(`0${temporaryMin}:${temporarySec}`)));
  }
  else{
    console.log(chalk.cyan(figlet.textSync(`${temporaryMin}:${temporarySec}`)));
  }
};

module.exports = { displayCountdown };
