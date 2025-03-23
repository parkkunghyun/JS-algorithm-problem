/**
 * 뻔 – 데기 – 뻔 – 데기 – 뻔 – 뻔 – 데기 – 데기
 * 뻔 – 데기 – 뻔 - 데기 – 뻔 – 뻔 – 뻔 – 데기 – 데기 – 데기
 * 뻔 – 데기 – 뻔 - 데기 – 뻔 * (n-1) 데기 * (n-1)
 * 0번째 ->T번째 뻔 데기 사람 구하기

 * 0 뻔 1 데기

 * 8 2 0
 * 내가 구해야하는 위치 만큼 돌려보기
 * 0부터 배열이니까!
 * 그리고 % 인원만큼해보기?
 * 12 % 8 = 4 - 1?
 * 
 */


const fs = require('fs');

const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = Number(input[0]);
const T = Number(input[1]);
const G = Number(input[2]);

const list = new Array();

// 일단 4개를 넣기 -> 그리고 그 다음부터는 n + 2 만큼 뻔 넣고 n+2만큼 데기 넣기
// 이걸 5000개가 될때까지 반복하기
// 0 1인지 확인

// 1. list에 뻔 데기 넣기
for (let i = 0; i < 100; i++) {
    list.push("뻔");
    list.push("데기");
    list.push("뻔");
    list.push("데기");

    for (let j = 0; j < i + 2; j++) {
        list.push("뻔");
    }
    for (let j = 0; j < i + 2; j++) {
        list.push("데기");
    }
}

//console.log(list.length);
// 0 은 뻔, 1은 데기
let check = 0;

if (G == 0) {
    // 뻔
    // T가 중요! -> check가  T이면 멈추기 -> 그리고 A만큼 나누고 -1하기
    for (let i = 0; i < list.length; i++) {
        if (T == check) {
            //console.log("뻔", i); // 일단 i 확인
            const answer =  (i-1) % A;
            console.log(answer);
            break;
        }

        if (list[i] === "뻔") {
            check++;
        }
    }
} else {
    // 데기
    for (let i = 0; i < list.length; i++) {
        if (T == check) {
            //console.log("데기",i); // 일단 i 확인
            const answer = (i-1) % A;
            console.log(answer);
            break;
        }

        if (list[i] === "데기") {
            check++;
        }
    }
}


