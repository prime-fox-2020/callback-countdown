const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = setInterval(function() {
    displayCountdown(seconds);
    if (seconds == 0) clearInterval(time);
    seconds--;
  }, 1000);
};

module.exports = {
  timer
};
