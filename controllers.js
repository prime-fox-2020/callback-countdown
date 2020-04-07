const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let count =setInterval(()=>{
    if(seconds==0){
      displayCountdown(seconds)
      clearInterval(count)
    }else if(seconds>0){
      displayCountdown(seconds)
    }
        seconds-=1
      },1000)
};
module.exports = {
  timer
};
