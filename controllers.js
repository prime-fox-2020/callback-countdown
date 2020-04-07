const { displayCountdown } = require("./views");

const timer = seconds => {
  let count = setInterval(() => {
    displayCountdown(seconds)
    seconds--
  }, 1000)
  setTimeout(() => {
    clearInterval(count)
    displayCountdown(seconds)
  }, seconds*1000 + 1000)
};

module.exports = {
  timer
};
