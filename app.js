const {timer} = require("./controllers");

const main = () => {
  const second = parseInt(process.argv[2]) || 10;
  timer(second); 
};

main();
