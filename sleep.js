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
}
console.log(counts(10));
