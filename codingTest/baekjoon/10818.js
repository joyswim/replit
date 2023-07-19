// 최소값, 최댓값 찾기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(Number);
let min = 1000001;
let max = -1000001;
// let min = data.reduce((a, b) => Math.min(a, b));
// let max = data.reduce((a, b) => Math.max(a, b));

for(let i = 0; i < n; i++){
  if(Number(data[i]) < min) min = data[i];
  if(Number(data[i]) > max) max = data[i];
}

console.log(min, max);