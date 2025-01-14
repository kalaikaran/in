var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (resolve) => {
    const value1 = await promise1;
    const value2 = await promise2;
    resolve(value1 + value2);
  });
};

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(6), 6000)),
  Promise.resolve(2)
).then(console.log); // 4
