const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit=Math.floor(seconds/60)
  let detik=seconds%60
    if(seconds==0){
      console.log(chalk.cyan(figlet.textSync("\nTIME IS UP!!!")));
    }else if(seconds%60==0){
      if(menit>=10){
        console.log(chalk.cyan(figlet.textSync(menit+':'+'00')))
      }else{
        console.log(chalk.cyan(figlet.textSync('0'+menit+':'+'00')))
      }
    }else if(seconds<60){
      if(detik>=10){
        console.log(chalk.cyan(figlet.textSync('00'+':'+seconds)))
      }else {
        console.log(chalk.cyan(figlet.textSync('00'+':'+'0'+seconds)))
      }
    }else if (seconds%60!==0){
      if(menit<=9&&detik>=10){
        console.log(chalk.cyan(figlet.textSync('0'+menit+':'+detik)))
      }else if (menit>=10&&detik>=10){
        console.log(chalk.cyan(figlet.textSync(menit+':'+detik)))
      }else if(menit<=9&&detik<=9){
        console.log(chalk.cyan(figlet.textSync('0'+menit+':'+'0'+detik)))
      }else if(menit>=10&&detik<=9){
        console.log(chalk.cyan(figlet.textSync(menit+':'+'0'+detik)))
      }
    }
};
// displayCountdown(60)
module.exports = { displayCountdown };
