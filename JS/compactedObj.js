var compactObject = function(obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;
  
  const compacted = {};
  
  for (const key in obj) {
      let value = compactObject(obj[key]);
      if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
};

let obj = [null, 0, false, 1];
// obj = [null, 0, 5, [0], [false, 16]];
console.log(obj.filter(Boolean))
// console.log(compactObject(obj)); // [1]