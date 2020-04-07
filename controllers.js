const { displayCountdown } = require("./views");

const timer = seconds => {
  let a = setInterval(() => {
    displayCountdown(seconds);
    seconds--
    if(seconds === -1){
      clearInterval(a);
    }
  }, 1000)


};

module.exports = {
  timer
};
