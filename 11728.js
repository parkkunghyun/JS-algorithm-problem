/**
 * 
 * 크기 크기
 * 100만
 * 합치고 정렬하기
 * 정렬되어있으니까 각자 동시에 둘르기
 * 그래서 정렬하기
 * 둘중에 더 긴걸 기준으로 보기?
 *
 * a_left a_right
 * b_left b_right
 * 
 * a,b 중 더 긴애를 하나 복사해
 * 
 */

const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);

const result = [].concat(arr1, arr2).sort((a,b) => a-b);
console.log(result);
console.log(result.join(" "));


