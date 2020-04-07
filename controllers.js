const { displayCountdown } = require("./views");

const timer = seconds => {
  let intervalID = setInterval (function() {
  	displayCountdown(seconds)
  	if (seconds == 0) {
  		clearInterval(intervalID)
  	}
  	seconds--
}, 1000);
};

module.exports = {
  timer
};
