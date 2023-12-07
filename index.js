const { read, write } = require("./src/file");
const convertHex = require("./src/convertHex");
const convertBinery = require("./src/convertBinery");

let code = [];
code.push(read().split("\n"));
code = code[0].map((line) => {
  return [
    line.slice(0, 4).trim().replace(",",""),
    line.slice(4, 8).trim(),
    ...line.slice(8).trim().split(" "),
  ];
});
console.log(code);

hex = convertHex(code);
write(hex, "../code/hex.txt");
console.log(hex);

binery = convertBinery(hex);
write(binery, "../code/bin.txt");
console.log(binery);
