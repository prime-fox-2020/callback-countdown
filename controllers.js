const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  const stopwatch = setInterval(() => {
    if(seconds === 0) {
      displayCountdown('Waktu Habis');
      clearInterval(stopwatch);
    }else{
      let menit = Math.floor(seconds/60);
      let detik = seconds%60;
      let waktu = '';
      if(menit < 10) menit = `0${menit}`;
      if(detik < 10) detik = `0${detik}`;
      waktu = `${menit} : ${detik}`;
      displayCountdown(waktu);;
    }
    seconds--;
  }, 1000);
};

module.exports = {
  timer
};
