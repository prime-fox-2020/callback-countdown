const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(() => {
    displayCountdown(seconds)
    if (seconds > 0) {
      seconds--
    } else if (seconds === 0) {
      clearInterval(this)
    }
  },1000)
}



module.exports = {
  timer
};
