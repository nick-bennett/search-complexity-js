var assert = require('assert');

function linearSearch(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return -1;
}

function binarySearch(haystack, needle) {
  var lower = 0;
  var upper = haystack.length;
  while (upper > lower) {
    let midpoint = Math.floor((lower + upper) / 2);
    if (haystack[midpoint] === needle) {
      return midpoint;
    } else if (haystack[midpoint] > needle) {
      upper = midpoint;
    } else {
      lower = midpoint + 1;
    }
  }
  return -upper - 1;
}


const DATA_SIZE = 1000000;
const TARGET_SIZE = 50000;

var start;
var end;

var data = [];
for (let i = 0; i < DATA_SIZE; i++) {
  data.push(Math.fround(Math.random()));
}

var targets = [];
for (let i = 0; i < TARGET_SIZE; i++) {
  targets.push(Math.fround(Math.random()));
}

console.log("Starting linear search");
start = new Date();
for (let i = 0; i < targets.length; i++) {
  linearSearch(data, targets[i]);
}
end = new Date();
console.log("Finished linear search");
console.log((end - start) / 1000);

console.log("Starting sort");
start = new Date();
data.sort();
end = new Date();
console.log("Finished sort");
console.log((end - start) / 1000);

console.log("Starting binary search");
start = new Date();
for (let i = 0; i < targets.length; i++) {
  binarySearch(data, targets[i]);
}
end = new Date();
console.log("Finished binary search");
console.log((end - start) / 1000);
