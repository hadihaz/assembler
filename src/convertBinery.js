function hexToBinery(n){
  return (parseInt(n, 16).toString(2)).padStart(4, '0');
}
function convertBinery(hex) {
  let binery = [];
  for (let row of hex) {
    let a=hexToBinery(row[0])
    let b = "";
    for (let i = 0; i < row[1].length; i++) {
      let bit = hexToBinery(row[1][i]);
      b = b + " " + bit;
    }

    binery.push([a, b]);
  }
  return binery;
}


module.exports = convertBinery;
