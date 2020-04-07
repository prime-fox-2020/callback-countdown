const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let play = setInterval(() => {
    seconds--
    seconds == 0 ? (displayCountdown(seconds), clearInterval(play)) : displayCountdown(seconds)
  },1000)
};

module.exports = { timer };
