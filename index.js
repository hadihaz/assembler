const { read, write } = require("./src/file");
const convertHex = require("./src/convertHex");
let arr = [];
arr.push(read().split("\n"));
arr = arr[0].map((line) => {
  return [
    line.slice(0, 4).trim(),
    line.slice(4, 8).trim(),
    ...line.slice(8).trim().split(" "),
  ];
});
hex = convertHex(arr);
console.log(hex);
