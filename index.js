const { read, write } = require("./src/file");
const convertHex = require("./src/convertHex");
const convertBinery = require("./src/convertBinery");

let arr = [];
arr.push(read().split("\n"));
arr = arr[0].map((line) => {
  return [
    line.slice(0, 4).trim(),
    line.slice(4, 8).trim(),
    ...line.slice(8).trim().split(" "),
  ];
});
console.log(arr);

hex = convertHex(arr);
write(hex, "../code/hex.txt");
console.log(hex);

binery = convertBinery(hex);
write(binery, "../code/bin.txt");
console.log(binery);
