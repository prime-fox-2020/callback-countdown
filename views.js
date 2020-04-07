const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  if(seconds==0){
    console.log(`WAKTU HABIS!`)
  }else if(seconds >= 10 ) {
    console.log(`00:${seconds}`)
  }else{
    console.log(`00:0${seconds}`)
  }

};

module.exports = { 
  displayCountdown
};
