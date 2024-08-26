function testEvent() {
  setTimeout(() => console.log("setTimeout"), 11);
  new Promise((resolve) => setTimeout(() => resolve("resolve 1"), 10)).then(
    (msg) => console.log(msg)
  );
  new Promise((resolve) => setTimeout(() => resolve("resolve 2"), 10)).then(
    (msg) => console.log(msg)
  );
  new Promise((resolve) => setTimeout(() => resolve("resolve 3"), 10)).then(
    (msg) => console.log(msg)
  );
  new Promise((resolve) => setTimeout(() => resolve("resolve 4"), 10)).then(
    (msg) => console.log(msg)
  );
  new Promise((resolve) => setTimeout(() => resolve("resolve 5"), 10)).then(
    (msg) => console.log(msg)
  );
}
testEvent();
