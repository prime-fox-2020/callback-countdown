const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // let handler = 0
  setInterval(()=>{
    if (seconds >= 0) {
      if (seconds === 0) {
        displayCountdown(seconds)
        clearInterval()
      } else {
        displayCountdown(seconds)
      }
    }
    seconds--
  }, 2000)
};

module.exports = {
  timer
};
