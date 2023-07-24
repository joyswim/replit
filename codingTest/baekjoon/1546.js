// 최댓값을 곱한 새로운 평균 구하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let score = input[1].split(' ').map(Number);
let max = Math.max(...score);
let sum = 0;
let newData = [];

for(let i = 0; i < n; i++){
  // newScore.push(score[i] / max * 100);
  newScore[i] = score[i] / max * 100;
  sum += newScore[i];
}
console.log(sum / n);
// console.log(newScore.reduce((a, b) => a + b) / n);