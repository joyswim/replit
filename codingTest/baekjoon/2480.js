// 주사위 세개
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
let price = 0;

// 3개가 모두 같은 경우
if(a == b && b == c) 
  price = 10000 + a * 1000;
// 2개가 같은 경우
else if(a == b) price = 1000 + a * 100;
else if(a == c) price = 1000 + a * 100;
else if(b == c) price = 1000 + b * 100;
// 3개가 모두 다른 경우
else 
  price = Math.max(a, b, c) * 100;

console.log(price);