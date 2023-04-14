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

export const main = () => {
  printLog('Hello World');
  printLog('POC Release Please Action');
  printLog(`1 + 2 is  ${sum(1,2)}`);
  printLog(`1452 + 234 is  ${sum(1452,234)}`);
  timer(5)
}

main()