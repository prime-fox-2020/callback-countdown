const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval( () => {
    if(seconds >= 0){
      if(seconds === 0){        
        displayCountdown(seconds)
        clearInterval(interval)
      }else{
        displayCountdown(seconds)
      }
    }
    seconds--
  }, 1000)
};

module.exports = {
  timer
};
