const { displayCountdown } = require("./views");
const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const timer = seconds => {
  // Your code here...
  displayCountdown(seconds)
  let timeInterval = setInterval(() => {
    seconds--

    if(seconds === 0){
      clearInterval(timeInterval)
    }
    
    displayCountdown(seconds)

  }, 1000)
};

module.exports = {
  timer
};
