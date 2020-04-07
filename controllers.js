const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  displayCountdown(seconds)
  let timerIntrvl = setInterval(() => {
    seconds --
    if (seconds === 0) clearInterval(timerIntrvl)
    displayCountdown(seconds)
  }, 1000)
};

module.exports = {
  timer
};
