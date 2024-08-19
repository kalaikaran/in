const start = performance.now(); // Start the timer
async function sleep() {
  await new Promise(resolve => setTimeout(resolve, 5000))
}
sleep();
const end = performance.now(); // End the timer

console.log(`Execution time: ${end - start} milliseconds`);