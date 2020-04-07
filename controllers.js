const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let intervalId = setInterval(() => {
    displayCountdown(seconds);
    seconds--;
    // if (seconds === -1) {
    //   clearInterval(intervalId);
    // }
  }, 1000);

  setTimeout (() => {
    clearInterval(intervalId)
    displayCountdown(seconds)
  }, seconds*1000 + 1000);
}

module.exports = {
  timer
};
