const { read, write } = require("./src/file");
const convertHex = require("./src/convertHex");
const convertBinery = require("./src/convertBinery");

let code = [];
code.push(read("../input.txt").split("\n"));
code = code[0].map((line) => {
  return [
    line.slice(0, 4).trim().replace(",", ""),
    line.slice(4, 8).trim(),
    ...line.slice(8).trim().split(" "),
  ];
});

hex = convertHex(code);
write(hex, "../code/hex.txt");

binery = convertBinery(hex);
write(binery, "../code/bin.txt");

let result = ["Hexa code: ", ...hex, "----------", "Binery code:", ...binery];
write(result, "../result.txt");

console.log(result)