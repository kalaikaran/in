var createCounter = function(n) {
  let isFirst = true;
  return function() {
      if(isFirst) {
        isFirst = false;
        return n;
      };
      n++;
      return n;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());