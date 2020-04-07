const { displayCountdown } = require("./views");

const timer = second => {
  displayCountdown(second);
  let timer = setInterval(() => {
    second -= 1;
    displayCountdown(second);
    if (second <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};

module.exports = {
  timer
};
