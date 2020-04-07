const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // let counter = 0;
  let counter = setInterval(() => {
    if(seconds >= 0) {
      if(seconds === counter) {
        displayCountdown(seconds);
        clearInterval(counter);
      }
      else {
        displayCountdown(seconds);
      }
    }
    seconds--;
  }, 1000);
  setTimeout(() => {
    clearInterval(counter);
    displayCountdown(seconds)
    // console.log(seconds)
  }, seconds*1000 + 1000 )
};

module.exports = {
  timer
};
