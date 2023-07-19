// 최댓값 찾기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
// let maxValue = data.reduce((a, b) => Math.max(a, b));
let maxValue = Math.max(...data);

console.log(maxValue);
console.log(data.indexOf(maxValue) + 1);