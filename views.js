const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const displayCountdown = (seconds) => {
	clear();
	console.log(chalk.cyan(figlet.textSync('Countdown App')));
	// Your code here...

	let menit = Math.floor(seconds / 60);
  let detik = seconds - menit * 60;
  if(seconds < 600){
  if(detik < 10){
    console.log(chalk.cyan(figlet.textSync(`0${menit}:0${detik}`)))
  }else{
    console.log(chalk.cyan(figlet.textSync(`0${menit}:${detik}`)))
  }
  }else {
    console.log('Maksimal di bawah 10 menit ya dek')
  }
};



module.exports = { displayCountdown };
