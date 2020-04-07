const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let ss = seconds % 60
  let mm = Math.floor(seconds / 60)

  if(mm < 1){
    if(ss < 10){
      console.log(chalk.cyan(figlet.textSync(`00:0${ss}`)))
      if(seconds === 0){
        clear()
        console.log(chalk.cyan(figlet.textSync("Countdown App")))
        console.log(chalk.cyan(figlet.textSync(`WAKTU HABIS!`)))
      }
    }else{
      console.log(chalk.cyan(figlet.textSync(`00:${ss}`)))
    }
  }else if(mm < 10){
    if(dd < 10){
      console.log(chalk.cyan(figlet.textSync(`0${mm}:0${ss}`)))
    }else{
      console.log(chalk.cyan(figlet.textSync(`${mm}:${ss}`)))
    }
  }else{
    console.log(chalk.cyan(figlet.textSync(`${mm}:${ss}`)))
  }
}

module.exports = { displayCountdown };
