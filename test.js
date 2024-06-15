// const arr1=[1,2,[2,1],3,[5,[6,7]]];
// const outputArr = [];
// function flatteningArr(arr){
//   if(!arr) return null
//   for(arrElement of arr){
//     if(Array.isArray(arrElement)) {
//       flatteningArr(arrElement);
//     } else {
//       outputArr.push(arrElement);
//     }
//   }
//   return outputArr;
// }

// console.log(flatteningArr(arr1));

// arr1.map();
// function myMap(){ 
//   console.log("just a test function");
// }

// Array.call(myMap);
// arr1.myMap();
// console.log(sum(1)(2)(3)(5)(6)(7)());
// // var resultVAr = {
// //   name: "k"
// // }
// // console.log()
// function sum(arg){
//   let total = 0;
//   function innerFunction (second) {
//     if(!second) return total
//     total+=second;
//     return innerFunction;
//   }
//   return innerFunction;
// }

// let result = {
//   k:"k"
// }
// var resultVar = {
//   name: "outside"
// }

// let results;
// console.log(results);
// results = 10;

// console.log(result);
// let result;
// result = 10;

// callMe();

// function callMe() {
//   console.log("called you");
// }

// limit 300ms

// let timer;
// function makeAPICall() {
//   console.log("test");
// }

// function setTimer() {
//   if(timer){
//     clearTimeout(timer);
//   }
//   timer = setTimeout(makeAPICall, 5000);
// }

// setTimer();
// setTimeout(makeAPICall, 300)


// async function  APICall(num) {
//   await new Promise(resolve => setTimeout(resolve, 5000))
//   return {
//     num: num
//   }
// }
// async function  APICall1(num) {
//   await new Promise(resolve => setTimeout(resolve, 3000))
//   return {
//     num: num
//   }
// }

// async function toCallAPI () {
//   const dataOfAPI1 = APICall(1).then((response) => {
//     console.log("dataOfAPI1");
//     console.log(response);
//   });
//   const dataOfAPI2 = APICall1(2).then((response) => {
//     console.log("dataOfAPI2")
//     console.log(response)
//   }
//   );
// }

// toCallAPI();


// Array.prototype.customMap = (callback) => {
//   console.log(this);
//   // if(!Array.isArray(this)) throw new Error("Its not an array")
//   let result = [];
//   for(let element = 0; element < this.length; element++){
//     result.push(callback(this[element], element, this))
//   }
//   return result;
// }

// console.log([1,2,3,4].customMap((element)=> element * 3));

// // Define the custom map function
// Array.prototype.customMap = function(callback) {
//   console.log(this)
//   // Create a new array to hold the results
//   const result = [];
//   // Iterate over each element in the array
//   for (let i = 0; i < this.length; i++) {
//       // Apply the callback to each element and push the result to the new array
//       result.push(callback(this[i], i, this));
//   }
//   // Return the new array
//   return result;
// };

// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.customMap(num => num * 2);
// console.log(doubled);
function customMap(callback) {
  console.log(this)
  // Create a new array to hold the results
  const result = [];
  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
      // Apply the callback to each element and push the result to the new array
      result.push(callback(this[i], i, this));
  }
  // Return the new array
  return result;
};
const names = ['Alice', 'Bob', 'Charlie'];

function addIndex(str, num) {
  return `${str} is at index ${num} - ${this[num]}`;
}
console.log(addIndex.call(names, "k", 1));
Array.bind(customMap, names)(addIndex);
