const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let time = setInterval(function () {
    displayCountdown(seconds--)
    if (seconds < 0) clearInterval(time)
  }, 1000)
};

module.exports = {
  timer
};
