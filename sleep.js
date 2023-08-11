function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function counts(times) {
  for (i = 1; i <= times; i++) {
    await sleep(1000);
    console.log(i);
  }
  console.log("hi");
}
// console.log(counts(5));

function countUp(num) {
  return new Promise((resolve) => {
    let times = setInterval(() => {
      console.log(num);
      ++num;
      if (num > 10) {
        clearInterval(times);
        resolve();
      }
    }, 1000);
  });
}
// console.log(countUp(1));

function countDown(x) {
  let loop = setInterval(() => {
    console.log(x);
    if (x < 1) {
      clearInterval(loop);
    }
    --x;
  }, 1000);
}
console.log(countDown(7));
