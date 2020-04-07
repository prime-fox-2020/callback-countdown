const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.black.bgBlueBright(figlet.textSync("Countdown App")));
  // Your code here...

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
      if(min < 10) {
        min = '0'+min
      }
      if(sec < 10) {
        sec = '0'+sec
      }
      let res = `${min} : ${sec}`
      console.log(chalk.black.bgBlueBright(figlet.textSync(res, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })));
};

module.exports = { displayCountdown };
