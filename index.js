const printLog = (log) => {
  console.log(log);
}

const sum = (a,b) => {
  return a + b;
}

const main = () => {
  printLog('Hello World');
  printLog(`1 + 2 is  ${sum(1,2)}`);
  let sec = 1;
  const intervalTime =  setInterval(() => {
    printLog(`second: ${sec}`);
    sec++;
    if(sec === 5) clearInterval(intervalTime);
  }, 1000)
}

main()