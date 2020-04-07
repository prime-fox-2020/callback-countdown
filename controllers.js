const { displayCountdown } = require("./views");

const timer = seconds => {
  let handler = 0
  setInterval(() => {
    if(seconds >= 0){
    if(handler === seconds){
      displayCountdown(seconds)
      clearInterval();
    }else{
      displayCountdown(seconds)
    }
    }
    seconds--
  }, 2000);
};

module.exports = {
  timer
};
