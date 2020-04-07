const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  if( seconds > 60){
    let secTime = seconds % 60
    let minTime = Math.floor(seconds/60)
    if(minTime < 10){
      minTime = `0${minTime}`
    }
    if(secTime < 10){
      secTime = `0${secTime}`
    }
    console.log(`${minTime} : ${secTime}`)
  }else{
    let minTime = '00'
    if(seconds < 10){
      var secTime = `0${seconds}`
    }else{
      var secTime = String(seconds)
    }
    console.log(chalk.cyan(figlet.textSync(`${minTime} : ${secTime}`)))
  }


};


module.exports = { displayCountdown };
