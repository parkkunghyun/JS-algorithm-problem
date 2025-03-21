const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const watchNumber = Number(input[0]);
let count = 0;
const cowMap = new Map();
for (let index = 1; index <= watchNumber; index++) {
  const watch = input[index].split(' ').map((x) => +x);
  if (cowMap.has(watch[0]) && cowMap.get(watch[0]) !== watch[1]) {
    count += 1;
  }
  cowMap.set(watch[0], watch[1]);
}
console.log(count);