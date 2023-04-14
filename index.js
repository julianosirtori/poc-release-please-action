const printLog = (log) => {
  console.log(log);
}

const sum = (a,b) => {
  return a + b;
}

const main = () => {
  printLog('Hello World');
  printLog(sum(1,2));
}

main()