const { displayCountdown } = require("./views");

const timer = seconds => {
  let start = seconds
  const checkLimit = () => {
    if (start === 0) clearInterval(userTime)
    displayCountdown(start)
    start--
  }
  const userTime = setInterval(checkLimit, 1000)
};

module.exports = {
  timer
};
