function hexToBinery(hex) {
  return parseInt(hex, 16).toString(2).padStart(4, "0");
}
function convertBinery(hex) {
  let binery = [];
  for (let row of hex) {
    let a = ("00000000" + (parseInt(row[0], 16)).toString(2)).substr(-8);
    let b = "";
    while (a.length % 3 != 0) {
      a = "" + 0 + a;
    }

    for (let i = 0; i < row[1].length; i++) {
      let bit = hexToBinery(row[1][i]);
      b = b + " " + bit;
    }
    binery.push([a, b]);
  }
  return binery;
}

module.exports = convertBinery;
