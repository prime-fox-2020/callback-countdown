const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  const waktu = setInterval(() => {
    if (seconds == 0) {
      clearInterval(waktu);
    }
    displayCountdown(seconds);
    seconds--
  }, 1000)
};

module.exports = {
  timer
};
