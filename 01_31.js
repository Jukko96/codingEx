const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
console.log(Number(input[0])-Number(input[1]));
fs.close();