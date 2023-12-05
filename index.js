const { read, write } = require("./src/file");
let arr = [];
arr.push(read().split("\n"));
arr = arr[0].map((line) => {
  return [line.slice(0, 4).trim(), line.slice(4, 8).trim(), ...line.slice(8).trim().split(" ")];
});
console.log(arr);