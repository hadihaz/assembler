let hex = [];
let address = 0;

function convertHex(code) {
  for (let line of code) {
    let res = symbolToHexCode(line[1], line[3]);
    if (res) {
      let hexAddress = address.toString(16).toUpperCase();
      hex.push([hexAddress, res, line[2], line[0]]);
      address += 1;
    } else {
      if (line[1] == "ORG") {
        address = parseInt(line[2], 16);
      } else if (line[1] == "HEX") {
        let adrs = line[2];
        while (adrs.length % 4 != 0) {
          adrs = "" + 0 + adrs;
        }
        let hexAddress = address.toString(16).toUpperCase();
        hex.push([hexAddress, adrs, "_", line[0]]);
        address += 1;
      } else if (line[1] == "DEC") {
        let hexAddress = address.toString(16).toUpperCase();
        hex.push([hexAddress, decToHex(line[2]), "_", line[0]]);
        address += 1;
      }
    }
  }
  for (let i = 0; i <= hex.length; i++) {
    if (hex[i][1] == "7001") {
      break;
    }
    if (hex[i][2]) {
      hex.map((h) => {
        if (h[3] == hex[i][2] && hex[i][1].length == 1 && hex[i][1] != h[1]) {
          let adrs = h[0];
          while (adrs.length % 3 != 0) {
            adrs = "" + 0 + adrs;
          }
          adrs = adrs.toUpperCase();
          hex[i][1] = hex[i][1] + adrs;
        }
      });
    }
  }

  hex = hex.map((h) => {
    // return [decToHex(h[0]), h[1]];
    // let adrs = String(h[0]);
    // while (adrs.length % 3 != 0) {
    //   adrs = "" + 0 + adrs;
    // }
    return [h[0].padStart(4, '0'), h[1]];
  });
  return hex;
}

function decToHex(decimal) {
  decimal = Number(decimal);
  if (decimal >= 0) {
    let hexadecimal = decimal.toString(16);
    while (hexadecimal.length % 4 != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }
    return hexadecimal.toUpperCase();
  } else {
    let hexadecimal = Math.abs(decimal).toString(16);
    while (hexadecimal.length % 4 != 0) {
      hexadecimal = "" + 0 + hexadecimal;
    }
    let output = "";
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

module.exports = convertHex;
