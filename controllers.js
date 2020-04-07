const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(() => {
    displayCountdown(seconds) 
      if(seconds > 0) {
        seconds--
      } else if(seconds == 0) {
        clearInterval(interval)
      }
  },1000)
};

module.exports = {
  timer
};
