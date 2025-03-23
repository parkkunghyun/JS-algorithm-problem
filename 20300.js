/**
 * pt - >최대 기구 2개
 * N
 * 근손실 정도 M이 안넘어야함
 * M의 최솟값 구하기
 * 
 * 즉 최고랑 최소를 합친것이어야함!
 * 그러면 최고 찾고 , 최소 찾음 되는거 아님?
 * 아니면 하나를 하는데 이게 엄청 클수도 있음
 * -> 즉 n이 홀수면 저것도 생각해야함
 * 
 * -> n이 짝수면 최고 최소 찾기
 * 
 * -> n이 홀수면 
 * 최고를 2개 구해보기 -> 최고 아래 + 최소 < 최고인지 확인
 */

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(BigInt);

//arr.sort((a,b) => a - b); Number 연산임

function solution(n, loss) {
    let answer = 0;
    loss.sort((a,b) => a < b ? -1 : 1);

    if (loss.length % 2 === 1) {
        answer = loss.pop();
        n -= 1;
    }

    for (let i = 0; i<n/2; i++) {
        const sum = loss[i] + loss[loss.length -1 - i];
        answer = sum > answer ? sum : answer;
    }
    return answer;
}

const answer = solution(N, arr);
console.log(String(answer));

// BigInt는 Number와 달리 n 접미사를 붙여서 표기합니다
// BigInt 값에 String()을 사용하면 n 접미사가 포함되지 않은 순수한 숫자 형태로 변환됩니다. 예를 들어:
