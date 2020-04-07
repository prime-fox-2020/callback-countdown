const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  
  const waktu = setInterval(() => {
    displayCountdown(seconds)
    if(seconds == 0){
      clearInterval(waktu)
    }
    seconds--
  }, 1000);
};

module.exports = {
  timer
};
