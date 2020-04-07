const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let counter = setInterval(() => {
    if(seconds > 0 && seconds < 60){
      displayCountdown(seconds)
      seconds--
    }else if(seconds > 60){
      let minute = Math.floor(seconds / 60)
      let second = seconds % 60
      displayCountdown(second, minute)
      seconds--
    }else if(seconds % 60 == 0 && seconds / 60 > 0){
      let second = seconds % 60
      let minute = Math.floor(seconds / 60)
      displayCountdown(second, minute--)
      seconds--
    }else if(seconds == 0){
      displayCountdown(seconds)
      clearInterval(counter)
    }
  }, 1000);

};

module.exports = {
  timer
};
