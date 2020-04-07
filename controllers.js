const { displayCountdown } = require("./views")


const timer = seconds => {
  // Your code here...
  let interval = setInterval(() => {
    displayCountdown(seconds)
    seconds-= 1
  }, 1000);

  setTimeout(() => {
    clearInterval(interval)
  }, (seconds+2)*1000);
};


module.exports = {
  timer,
};
