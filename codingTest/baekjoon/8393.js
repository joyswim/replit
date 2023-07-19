// 합
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let sum = 0;

for(let i = 1; i <= number; i++){
  sum += i;
}

console.log(sum);

// 등차수열 합 공식
// console.log(n * (n + 1) / 2);