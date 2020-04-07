const { displayCountdown } = require("./views");

class Clock{
  constructor(seconds){
    this.minutes = Math.floor(seconds/60);
    this.seconds = seconds%60;
  }
  changeTime(){
    if(this.seconds == 0){
      this.seconds = 59;
      this.minutes -= 1;
    }
    else{
      this.seconds -= 1;
    }
  }
  getTime(){
    let detik = ''+this.seconds;
    let menit = ''+this.minutes;
    if(detik.length == 1){
      detik = '0 ' + detik;
    } else{
      detik = detik.substring(0,1) + ' ' + detik.substring(1);
    }
    if(menit.length == 1){
      menit = '0 ' + menit;
    } else{
      menit = menit.substring(0,1) + ' ' + menit.substring(1);
    }
  
  return `${menit} : ${detik}`;
  }
}
const timer = (seconds) => {
  let clock = new Clock(seconds)
  let inter = setInterval(()=> {
    displayCountdown(clock.getTime());
    if(clock.seconds == 0 && clock.minutes == 0){
      clearInterval(inter);
    }
    clock.changeTime();
  }, 1000)
};

module.exports = {
  timer
};
