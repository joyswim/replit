// 문자열 문제 - 숫자의 합
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let str = input[1]
let sum = 0;

// 문자열에 포함된 문자를 하나씩 확인
for(let x of str){
  sum += Number(x);
}

console.log(sum);