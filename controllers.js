const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  const timeup = setInterval (() => {
    if (seconds === 0) {
      clearInterval(timeup)
    } else {
      seconds--
      let minute = Math.trunc(seconds/60)
      let sec = seconds % 60
      if (sec < 10) {sec = '0' + sec } 
      if (minute < 10) {minute = '0' + minute}
      displayCountdown(`${minute} : ${sec}`) // from views
    }
  }, 200) // interval
};

module.exports = {
  timer
};
