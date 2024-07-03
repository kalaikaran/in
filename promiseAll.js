/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  let lengthOfarray = functions.length,
    counter = 0, result = [], err;;
  function resolveThis(resolve){
    counter++
    if(lengthOfarray === counter){
      resolve(result);
    }
  }
  return new Promise((resolve, reject) => {
    functions.forEach((ele, index) => {
        ele().then((res) => {
            result[index] = res;
            resolveThis(resolve);
        }).catch((err) => {
            reject(err);
        })
    });
  });
};
let pro =[() => new Promise(res => res(42))];
pro = [() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))];
pro = [() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))];
const promises = promiseAll(pro)
promises.then(console.log).catch(console.log); // [42]
