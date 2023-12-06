const fs = require("fs");
const path = require("path");

module.exports = {
  read: function read() {
    const filePath = path.join(__dirname, "../code/input.txt");
    const data = fs.readFileSync(filePath);
    return data.toString();
  },
  write: function write(res, addrees) {
    const filePath = path.join(__dirname, addrees);
    fs.writeFileSync(filePath, res.join("\n"));
  },
};
