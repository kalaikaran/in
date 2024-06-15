var createCounter = function(init) {
  const counter = init;
  const resetTo = init;
  return {
    increment: () => {
      return counter++
    },
    decrement: () => counter--,
    reset: () => counter = resetTo
  }
};
const counter = createCounter(5);
console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4