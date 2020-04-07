const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let min = 0
  let sec = 0
  while(true){
    if(seconds % 60 !== 0){
      seconds--
      sec++
    } else if(seconds % 60 === 0 && seconds !== 0){
      min = seconds/60
      break
    } else if (seconds === 0){
      break
    }
  }

  if(String(sec).length < 2 && String(sec).length < 2){
    console.log(chalk.yellow(figlet.textSync(`0${min}:0${sec}`)));
  } else if(String(sec).length === 2 && String(min).length < 2){
    console.log(chalk.yellow(figlet.textSync(`0${min}:${sec}`)));
  } else if(String(sec).length < 2 && String(min).length === 2){
    console.log(chalk.yellow(figlet.textSync(`${min}:0${sec}`)));
  } else if(String(sec).length === 2 && String(min).length === 2){
    console.log(chalk.yellow(figlet.textSync(`${min}:${sec}`)));
  }



};

module.exports = { displayCountdown };
