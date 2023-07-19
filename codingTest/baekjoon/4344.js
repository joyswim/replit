// 진행중
// 평균 넘는 사람 비율
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let testCase = Number(input[0]);
let n;
let sum;
let count;
let average = [];

for(let i = 1; i <= testCase; i++){
  let data = input[i].split(' ').map(Number);
  // 초기화
  n = data[0];
  sum = 0;
  count = 0;
  // 평균구하기
  for(let j = 1; j <= n; j++){
    sum += data[j]; 
  }
  average = sum / n;
  // 평균 넘는 사람 세기
  for(let j = 1; j <= n; j++){
    if(data[j] > average) count++;
  }
  result = count / n;
  console.log(result.toFixed(3) + '%');
}