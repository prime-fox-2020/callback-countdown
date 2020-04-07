const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");


const displayCountdown = seconds => {
  clear();

  // get the format
  let dd = seconds % 60
  let mm = Math.floor(seconds / 60)

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // conditional seconds
  if(mm < 1){
    if(dd < 10){
      if(seconds === 0){
        console.log(chalk.cyan(figlet.textSync(`00:0${dd}`)))
        console.log(chalk.cyan(figlet.textSync(`TIME IS UP`)))
      }else {
        console.log(chalk.cyan(figlet.textSync(`00:0${dd}`)))
      }
    }else{
      console.log(chalk.cyan(figlet.textSync(`00:${dd}`)))
    }
  }else if (mm < 10){
    if(dd < 10){
      console.log(chalk.cyan(figlet.textSync(`0${mm}:0${dd}`)))
    }else{
      console.log(chalk.cyan(figlet.textSync(`${mm}:${dd}`)))
    }
  }else{
    console.log(chalk.cyan(figlet.textSync(`${mm}:${dd}`)))

  }
};

// displayCountdown(timer)

module.exports = { displayCountdown };
