// 1- Move all zeros to the end of an array - Handle all negative and corner cases;

let arr = [10, 9, 8, 0, 0.3, 0, -1, 4, -3]; // output 10, 9, 8, -1, 4, -3, 0, 0

function pushZerosToEnd(arr) {
  let result = [];
  let zeroArr = [];
  arr.forEach((ele) => {
    if (ele === 0) {
      zeroArr.push(ele);
    } else {
      result.push(ele);
    }
  });
  return (result = [...result, ...zeroArr]);
}

console.log(pushZerosToEnd(arr));

// 2- Write a sample program that reverses the words in a sentence

let sentence = "sample program that reverses the words in a sentence "; // sentence a in words the reverses that program sample

function reverseWords(str) {
  let wordArr = str.split(" ");
  let result = [];
  wordArr.forEach((ele) => {
    result.unshift(ele);
  });
  return result.join(" ");
}

console.log(reverseWords(sentence));

// 3- Write a function to merge the list of lists into a single sorted list and return it.

let merge = [
  [9, 7, 3],
  [4, 8, 6],
  [1, 5, 2],
];
let result = [];
function mergeAndSort(arr) {
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      mergeAndSort(ele);
    } else {
      result.push(ele);
    }
  });
}
mergeAndSort(merge);
console.log(result.sort());

async function sleep(m) {
  await new Promise((resolve) => setTimeout(resolve, m));
}

async function test() {
  await sleep(5000);
  console.log("test", performance.now());
}
console.log("one", performance.now());
test(10000);
console.log("two", performance.now());
