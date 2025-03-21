/**
 * 
 * const 
 */

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 0;

const [c, nums] = input.split("\n");

for (let i = 0; i < nums.length; i++) {
    let n = Number(nums[i]);
    answer += n;
   // console.log(answer);
}
console.log(answer);