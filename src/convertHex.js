let hex = [];
let address = [];

function convertHex(code) {
  for (let line of code) {
    let res = symbolToHexCode(line[1], line[3]);
    if (res) {
      hex.push([address, res, line[2]]);
      address += 1;
    } else {
      symbolRecognition(line);
    }
  }
  for (let i of hex) {
    while (i[0].length % 3 != 0) {
      i[0] = "" + 0 + i[0];
    }
  }
  // console.log(hex);

  for (let i = 0; i <= hex.length; i++) {
    if (hex[i][1] == "7001") {
      break;
    }
    if (hex[i][2]) {
      hex.map((h) => {
        if (h[2] == hex[i][2] && hex[i][1].length == 1 && hex[i][1] != h[1]) {
          hex[i][1] = hex[i][1] + h[0];
        }
      });
    }
  }
  // console.log(hex);

  hex = hex.map((h) => {
    return [decToHex(h[0]), h[1]];
  });
  return hex;
}

function decToHex(decimal) {
  var size = 4;

  if (decimal >= 0) {
    var hexadecimal = decimal.toString(16);

    while (hexadecimal.length % size != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }

    return hexadecimal;
  } else {
    var hexadecimal = Math.abs(decimal).toString(16);
    while (hexadecimal.length % size != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }

    var output = "";
    for (i = 0; i < hexadecimal.length; i++) {
      output += (0x0f - parseInt(hexadecimal[i], 16)).toString(16);
    }

    output = (0x01 + parseInt(output, 16)).toString(16);
    return output.toUpperCase();
  }
}

const symbolList = [
  "AND",
  "ADD",
  "LDA",
  "STA",
  "BUN",
  "BSA",
  "ISZ",
  "CLA",
  "CLE",
  "CMA",
  "CME",
  "CIR",
  "CIL",
  "INC",
  "SPA",
  "SNA",
  "SZA",
  "SZE",
  "HLT",
  "INP",
  "OUT",
  "SKI",
  "SKO",
  "ION",
  "IOF",
];
const hexaCodeList = [
  "08",
  "19",
  "2A",
  "3B",
  "4C",
  "5D",
  "6E",
  "7800",
  "7400",
  "7200",
  "7100",
  "7080",
  "7040",
  "7020",
  "7010",
  "7008",
  "7004",
  "7002",
  "7001",
  "F800",
  "F400",
  "F200",
  "F100",
  "F080",
  "F040",
];

function symbolToHexCode(symbol, I) {
  let index = symbolList.indexOf(symbol);
  let hex = hexaCodeList[index];
  if (parseInt(index) <= 6 && parseInt(index) >= 0) {
    if (I) {
      hex = hex[1];
    } else {
      hex = hex[0];
    }
  }
  return hex;
}
function symbolRecognition(line) {
  if (line[1] == "ORG") {
    address = parseInt(line[2]);
  } else if (line[1] == "HEX") {
    hex.push([address, line[2], line[0]]);
    address += 1;
  } else if (line[1] == "DEC") {
    hex.push([address, decToHex(line[2]), line[0]]);
    address += 1;
  }
}

module.exports = convertHex;
