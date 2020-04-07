const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...

   let minute = Math.floor(seconds / 60)
   let second = seconds - (minute * 60)

   
   if(minute < 10){
     minute = `0 ${minute}`
   }

   if(second < 10) {
     second = `0 ${second}`
   }
   
   console.log(chalk.cyan(figlet.textSync(`${minute} : ${second}`)));
   if(seconds === 0){
    console.log(chalk.cyan(figlet.textSync("selesai")));
   }
 

};

module.exports = { displayCountdown };
