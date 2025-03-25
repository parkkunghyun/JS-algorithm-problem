/**
 * 
 * %를 차지하는지 구하기
 * 10만 그루
 * 사전순 출력 + 비율을 백분율로 소수 4번째
 * 
 * 총개수와 전체 해당 비율을 알아내야함
 * 
 */
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let trees = new Map();
let len = input.length;

for (let i = 0; i < len; i++) {
    //console.log(input[i]);
    if (trees.has(input[i])) {
        trees.set(input[i], trees.get(input[i]) + 1);
    } else {
        trees.set(input[i], 1);
    }
}

//console.log(trees);
const treeArray = []

let mapLen = trees.size;
//console.log(mapLen);

for (const [key, value] of trees) {
    treeArray.push([key, value]);
}

//console.log(treeArray);

treeArray.sort((a,b) => a[0].localeCompare(b[0]));

//console.log(treeArray[0][1],treeArray[0], len)
//console.log(400 / 29)

for (let i = 0; i<treeArray.length; i++) {
    const tree = treeArray[i][1] * 100;
    const answer = (tree / len).toFixed(4);
    console.log(`${treeArray[i][0]} ${answer}`);
}