
/**
 * 1 -2 3
 * 
 * 3
 * 
n_arr[1] * n_arr[2] + n_arr[2] * n_arr[3] + n_arr[3]

-2
-6
3

 * 
 * 
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);

