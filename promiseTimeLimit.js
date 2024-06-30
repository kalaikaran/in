var timeLimit = function(fn, t) {
  // const call = await fn(t);
  return async function(time) {
    console.log(time);
      if(t <){
          
      }
  }
};


  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
