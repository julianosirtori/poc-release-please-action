const printLog = (log) => {
  console.log(log);
}

const sum = (a,b) => {
  return a + b;
}

const timer = (maxSec) => {
  let sec = 1;
  const intervalTime =  setInterval(() => {
    printLog(`second: ${sec}`);
    sec++;
    if(sec === maxSec) clearInterval(intervalTime);
  }, 1000)
}

const main = () => {
  printLog('Hello World');
  printLog(`1 + 2 is  ${sum(1,2)}`);
  timer(5)
}

main()