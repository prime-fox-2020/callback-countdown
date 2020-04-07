const { displayCountdown } = require("./views");

const timer = seconds => {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  let j = setInterval(() => {
    if (sec == -1 && min !== 0) { min--; sec = 59 };
    displayCountdown(min, sec);
    if (sec == 0 && min == 0) clearInterval(j);
    sec--;
  }, 1000);
  // Your code here...
};

module.exports = {
  timer
};
