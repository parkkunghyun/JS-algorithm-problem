/**
 * 소수 찾기
 * 주어진 N개 중에 소수가 몇개인지 찾아서 출력하기 
 * 100이하
 * 
 * 일단 소수의 조건
 * 자기 자신과 1을 제외하고 나눠지면 안된다 -> 자기 자신 / 2 + 1까지 나눠지는게 없다면 소수임
 * 그러면 개수 추가하기
 * 
 * 백준에서 입력은 STDIN으로 들어옴 -> /dev/stdin -> linux환경에서 키보드 입력
 * buffer형태로 저장됨
 * toString으로 사람이 읽을수있게 ->
 */

//const isPrime()

//const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const fs = require('fs');

let answer = 0;

const isPrime = (n) => {
    if (n == 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// 표준 입력(STDIN)에서 데이터 읽기
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 줄 단위로 나누기
const [c, nums] = input.split("\n");

const numbers = nums.split(' ').map(Number);

for (let i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    if (isPrime(numbers[i])) {
        answer++;
    }
}

console.log(answer);