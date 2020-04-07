const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let countDown = setInterval(() => {
    displayCountdown(seconds)
    if (seconds > 0) {
      seconds -= 1
    } else {
      clearInterval(countDown)
    }
  }, 1000);
};

module.exports = {
  timer
};
