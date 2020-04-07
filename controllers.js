const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let count = setInterval(() => {
    displayCountdown(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(count);
    }
  }, 1000);
};

module.exports = {
  timer
};
